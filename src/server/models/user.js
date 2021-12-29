const { query } = require('../db');
const addUser = (val) => {
    let _sql = `INSERT INTO user(id,user_name,password) VALUES (?,?,?)`
    return query(_sql, val);
}

const findUser = (val) => {
    let _sql = `SELECT * FROM user WHERE user_name='${val}'`;
    return query(_sql);
}
module.exports = {
    addUser,
    findUser
}