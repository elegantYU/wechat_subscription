const request = require('request')
const memoryCache = require('memory-cache')
const config = require('../config/wechat.config')

// 获取access_token
const getAccessToken = function () {
	return new Promise((resolve, reject) => {
		request({
			timeout: 5000,
			method: 'GET',
			url: config.access_token,
			qs: {
				grant_type: 'client_credential',
				appid: config.appid,
				secret: config.appsecret
			}
		}, function (err, res, body) {
			if (!err && res.statusCode === 200) {
				body = JSON.parse(body)
				resolve(body.access_token)
			} else {
				reject(err)
			}
		})
	})
}

//  缓存accesstoken做为中间件插入
const useCache = function (req, res, next) {
	// 调用缓存access_token
	if (memoryCache.get('accessToken')) {
		req.access_token = memoryCache.get('accessToken')
		// console.log('缓存调用')
		next()
	} else {
		getAccessToken()
			.then(response => {
				memoryCache.put('accessToken', response, 1000*60*60*2)
				req.access_token = response
				// console.log('微信调用')
				next()
			})
	}
}

module.exports = useCache