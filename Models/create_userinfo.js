const easySql = require('../Models/easySql')

const createUserinfo = function (res) {
    const sql = `INSERT INTO userinfo (
                    scene_id,
                    openid,
                    user_name,
                    user_img,
                    user_sex,
                    user_country,
                    user_province,
                    user_city,
                    user_email
                )
                VALUES (
                    '${res.scene_id}',
                    '${res.body.openid}',
                    '${res.body.nickname}',
                    '${res.body.headimgurl}',
                    '${res.body.sex}',
                    '${res.body.country}',
                    '${res.body.province}',
                    '${res.body.city}',
                    ''
                );`

    return new Promise((resolve, reject) => {
        easySql(sql)
            .then(res => {
                resolve(res)
            })
    })
}

module.exports = createUserinfo