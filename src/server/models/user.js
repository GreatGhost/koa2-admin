const { query } = require('../db');
const addUser = (val) => {
    let _sql = `INSERT INTO user(id,user_name,password) VALUES (?,?,?)`
    return query(_sql, val);
}

const findUser = (val) => {
    let _sql = `SELECT * FROM user WHERE user_name='${val}'`;
    // let _sql=`select * from user where user_name=''`;
    // console.log('sql语句',_sql);
    return query(_sql);
}
module.exports = {
    addUser,
    findUser
}