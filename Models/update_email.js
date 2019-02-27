const easySql = require('../Models/easySql')
const utils = require('../utils/utils')

const updateEmail = function (scene_id, email) {
    const sql = `UPDATE userinfo SET
                    user_email='${email}'
                WHERE
                    scene_id='${scene_id}';`

    return new Promise((resolve, reject) => {
        // 判断email格式或是否存在 决定是否更新email
        if (!utils.checkEmail(email) || !email) {
            resolve()
        } else {
            easySql(sql)
                .then(res => {
                    resolve(res)
                })
        }
    })
}

module.exports = updateEmail