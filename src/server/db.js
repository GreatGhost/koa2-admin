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
    findUserData() {
        let _sql = `select * from user`;
        return this.query(_sql);
    },
    addUserData(options) {
        let _sql = `insert into user (user_name,password) values ('秦明334','123422')`;
        return this.query(_sql)
    },
    async signIn(options) {
        let _sql = `select * from user where user_name="${options.username}" AND 
            password="${options.password}" limit 1
        `
        let list = await this.query(_sql);
        if (list.length > 0) {
            return {
                code: 200, data: {}, messaage: '匹配成功'
            }
        } else {
            return {
                code: 500, data: {}, messaage: '账号密码错误'
            }
        }
    }
}

module.exports = sqlQueryConfig;