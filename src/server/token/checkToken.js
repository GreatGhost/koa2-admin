const jwt = require('jsonwebtoken');
async function checkToken(ctx, next) {
    const url = ctx.url.split('?')[0];
    // 如果是登录页、注册页无需token
    console.log('当前url',url)
    const noTokenList = [
        '/',
        '/admin/login',
        '/admin/register',
        '/wechat',
        '/wechat/event'
    ]
    if (noTokenList.includes(url) || url.indexOf('public')!=-1) {
        await next();
    } else {
        let token = ctx.request.headers['authorization'];
        if (token) {
            // 如果存在token，则解析token
            const tokenContent = jwt.verify(token, 'kuaifengle');
            const { time, timeout } = tokenContent;
            
            let date = new Date().getTime();
            if ((date - time) <= timeout) {
                await next()
            } else {
                ctx.body = {
                    code: 405,
                    msg: 'token已过期，请重新登录'
                }
            }
        } else {
            ctx.body = {
                code: 401,
                msg: '当前未登录，请先登录'
            }
        }
    }
}

module.exports = checkToken;