const Router =require('koa-router')
const sqlQueryConfig=require('../server/db');
const admin=require('./admin')
const router=new Router();

router.get('/api/loginUser',(ctx)=>{
    ctx.body={
        code:0,
        data:{
            username:'宋江',
            address:'天街1号'
        }
    }
})

// 用户操作
router.get('/getAllUser',async (ctx)=>{
    const users= await sqlQueryConfig.findUserData();
    ctx.body={
        code:0,
        data:users
    }   
})
router.use(admin.routes()).use(admin.allowedMethods());
module.exports=router