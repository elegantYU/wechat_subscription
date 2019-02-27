const easySql = require('../Models/easySql')

const sreachUserinfo = function (scene_id) {
    const sql = `SELECT * FROM userinfo WHERE scene_id='${scene_id}';`
    
    return new Promise((resolve, reject) => {
        easySql(sql)
            .then(res => {
                resolve(res[0])
            })
    })
}

module.exports = sreachUserinfo