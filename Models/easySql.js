const config = require('../config/mysql.config')
const pool = require('mysql').createPool(config)

const easySql = sql =>{
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            connection.query(sql, (err, rows, fields) => {
                if (err) reject(err)
                resolve(rows)
                connection.release()
            })
        })
    })
}

module.exports = easySql