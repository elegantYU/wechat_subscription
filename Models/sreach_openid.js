const easySql = require('../Models/easySql')
const utils = require('../utils/utils')

const sreachOpenid = function (body, scene_id) {
	const sql = `SELECT * FROM userinfo WHERE openid='${body.openid}';`

	return new Promise((resolve, reject) => {
		easySql(sql)
			.then(res => {
				const result = { res, body, scene_id }
				resolve(result)
			})
	})
}

module.exports = sreachOpenid
