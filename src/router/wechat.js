const Router=require('koa-router')
const wechatApi=require('../controls/wechat');
const wechatRouter=new Router({
    prefix:'/wechat'
})

wechatRouter.get('/',(ctx,next)=>ctx.body='hello world')
wechatRouter.get('/event',wechatApi)
wechatRouter.post('/event',wechatApi)
module.exports=wechatRouter