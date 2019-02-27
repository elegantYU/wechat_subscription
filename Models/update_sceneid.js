const easySql = require('./easySql')

const updateSceneid = function (res) {
    const sql = `UPDATE userinfo SET 
                    scene_id='${res.scene_id}', 
                    user_name='${res.body.nickname}'
                WHERE
                    openid='${res.body.openid}';`
                
    return new Promise((resolve, reject) => {
        easySql(sql)
            .then(response => {
                resolve(response)
            })
    })
}

module.exports = updateSceneid