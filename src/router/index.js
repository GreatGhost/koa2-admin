const Router =require('koa-router')
const sqlQueryConfig=require('../server/db');
const admin=require('./admin')
const wechat=require('./wechat')
const upload=require('./upload')
const router=new Router();

// 用户路由
router.get('/',(ctx)=>{
    ctx.body='hello Koa';
})
router.use(admin.routes()).use(admin.allowedMethods());
// 微信路由
router.use(wechat.routes()).use(wechat.allowedMethods())
// 上传
router.use(upload.routes()).use(upload.allowedMethods())

module.exports=router