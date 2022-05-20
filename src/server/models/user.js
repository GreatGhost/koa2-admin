const { query } = require("../db")
const addUser = (val) => {
  let _sql = `INSERT INTO user(id,user_name,password) VALUES (?,?,?)`
  return query(_sql, val)
}

const findUser = (val) => {
  let _sql = `SELECT * FROM user WHERE user_name='${val}'`
  return query(_sql)
}

const findAllUser = (page, pagesize) => {
  let start = (page - 1) * pagesize
  let end = page * pagesize
  let _sql = `SELECT * FROM user limit ${start},${end}`
  return query(_sql)
}
const findUserCount = () => {
  let _sql = `SELECT count(*) FROM user`
  return query(_sql)
}

const delUser = (id) => {
  let _sql = `DELETE FROM user WHERE id='${id}'`
  return query(_sql)
}
module.exports = {
  addUser,
  findUser,
  findAllUser,
  findUserCount,
  delUser,
}
