const Router =require('koa-router')
const sqlQueryConfig=require('../server/db');
const admin=require('./admin')
const router=new Router();

// 用户路由
router.use(admin.routes()).use(admin.allowedMethods());
module.exports=router