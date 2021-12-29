const Koa = require('koa')
const router = require('./router');
const cors = require('koa2-cors');
const bodyparser = require('koa-bodyparser');
const static = require('koa-static');
const checkToken = require('./server/token/checkToken');
const app = new Koa();



// 使用ctx.body解析中间件
app.use(bodyparser());
// 解决跨域
app.use(cors());

// token校验
app.use(checkToken)

// 静态文件
app.use(static('./'))
// 路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('启动成功');
})