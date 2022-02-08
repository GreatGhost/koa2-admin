const Router =require( 'koa-router');
const {upLoad}=require('../middlewares/upload')
const commonService=require('../controls/common')
const router=new Router({
    prefix:'/upload'
});

router.post('/single',upLoad,commonService.upload)

module.exports=router