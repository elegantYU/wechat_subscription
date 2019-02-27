const easySql = require('../Models/easySql')

const sreachPower = function (response) {
    const sql = `SELECT * FROM company_staff WHERE user_email='${response.user_email}';`

    return new Promise((resolve, reject) => {
        easySql(sql)
            .then(res => {
                console.log('权限详细')
                console.log(res[0])
                response.power = res[0]
                resolve(response)
            })
            .catch(err => {
                console.log(err)
            })
    })
}

module.exports = sreachPower