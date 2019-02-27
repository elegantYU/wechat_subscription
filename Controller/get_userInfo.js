const request = require('request')
const config = require('../config/wechat.config')

// 根据access_token和openid获取用户基本信息
const getUserInfo = function (access_token, openid) {
	return new Promise((resolve, reject) => {
		request({
			timeout: 5000,
			method: 'GET',
			url: config.userinfo,
			qs: {
				access_token: access_token,
				openid: openid,
				lang: 'zh_CN'
			}
		}, function (err, res, body) {
			if (!err && res.statusCode === 200) {
				body = JSON.parse(body)
				resolve(body)
			} else {
				reject(err)
			}
		})
	})
}

module.exports = getUserInfo