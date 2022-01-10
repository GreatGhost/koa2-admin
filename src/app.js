/*
 * @Author: Today.luke 
 * @Date: 2021-12-31 14:45:15 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2022-01-06 18:29:04
 */

const Koa = require('koa')
const router = require('./router');
const cors = require('koa2-cors');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const checkToken = require('./server/token/checkToken');
const XMLParser = require('./middlewares/XMLParser2')
const app = new Koa();
const {CACHE}=require('./config')



// 使用ctx.body解析中间件
app.use(XMLParser)
app.use(bodyparser());
// 解决跨域
app.use(cors());

// token校验
app.use(checkToken)

// 静态文件
app.use(static('./'))
// app.use(static(path.join(__dirname,'/')))
// 路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(CACHE.port, () => {
    console.log('启动成功');
})