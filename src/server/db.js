const mysql = require('mysql');
const config = require('./config')
const pool = mysql.createPool({
    host: config.database.HOST,
    port: config.database.PORT,
    database: config.database.DATABASE,
    user: config.database.USERNAME,
    password: config.database.PASSWORD
})

let sqlQueryConfig = {
    query(sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    console.log('错误', err)
                    reject(err);
                } else {
                    connection.query(sql, values, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows);
                        }
                    })
                    connection.release();
                }
            })
        })
    },
}

module.exports = sqlQueryConfig;