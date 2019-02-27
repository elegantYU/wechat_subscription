const xml2js = require('xml2js')
const url = require('url')
const querystring = require('querystring')

const getUserInfo = require('../Controller/get_userInfo')
const utils = require('../utils/utils')

const sreachOpenid = require('../Models/sreach_openid')
const createUserinfo = require('../Models/create_userinfo')
const sreachUserinfo = require('../Models/sreach_userinfo')
const updateSceneid = require('../Models/update_sceneid')
const updateEmail = require('../Models/update_email')
const sreachPower = require('../Models/sreach_power')

class Wechat {
	revice (req, res, next) {
		res.writeHead(200, { 'Content-Type': 'application/xml' })

		req.on('data', data => {
			// 解析xml
			xml2js.parseString(data.toString(), (err, result) => {
				if (err) console.log(err)
				// 被动回复消息 返回一个xml文本
				if (result) {
					const xml = result.xml
					if (xml.MsgType[0] === 'event') {
						switch (xml.Event[0]) {
							case 'subscribe':
							case 'SCAN':
								const openid = xml.FromUserName[0]
								const scene_id = xml.EventKey[0].replace('qrscene_', '')
								const access_token = req.access_token
								// 此处获取用户信息
								getUserInfo(access_token, openid)
									.then(response => {
										//  查询表中是否存在openid
										return sreachOpenid(response, scene_id)
									})
									.then((response) => {
										if (response.res.length) {
											// 若存在， 更新scene_id
											return updateSceneid(response)
										} else {
											// 若不存在， 生成新数据
											return createUserinfo(response)
										}
									})
									.catch(err => {
										console.log(err)
									})
								break;
						}
						res.end()
					} else {
						res.end()
					}
				}
			})
		})
	}

	// 获取用户基本信息
	checkUserInfo (req, res, next) {
		const urlQuery = url.parse(req.url).query
		const scene_id = querystring.parse(urlQuery)['scene_id']
		let email = querystring.parse(urlQuery)['email']
 
		// 根据scene_id绑定email
		updateEmail(scene_id, email)
			.then(() =>{
				// 根据scene_id获取userinfo
				return sreachUserinfo(scene_id)
			})
			.then(response => {

				if(!response) {
					console.log('获取不到userinfo')
					return {msg: '0'}
				}
				
				// 查找可用权限
				if (response.user_email !== '') {
					return sreachPower(response)
				} else {
					// 权限为0
					console.log('没有权限')
					response.power = {
						power_range: ['1']
					}
					return response
				}
			})
			.then(response => {
				console.log('发送数据')
				console.log(response)
				res.send(response)
			})
			.catch(err => {
				console.log(err)
			})
	}
}

module.exports = new Wechat()