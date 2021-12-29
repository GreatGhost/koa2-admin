/* 
 * 登录 子路由
 *
*/

const Router =require('koa-router')
const adminApiConfig=require('../controls/admin')

const adminRouter= new Router({
    prefix:'/admin'
})

adminRouter.post('/login',adminApiConfig.adminSignIn);
adminRouter.post('/register',adminApiConfig.adminSignUp)


module.exports=adminRouter;