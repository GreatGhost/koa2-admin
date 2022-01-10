const { WXMP } = require('../config');
const { SHA1 } = require('../utils/mUtils')
module.exports = async (ctx, next) => {
    const token = WXMP.token
    const { signature, nonce, timestamp, echostr } = ctx.query
    /**
    * https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421135319
    * 1）将token、timestamp、nonce三个参数进行字典序排序
    * 2）将三个参数字符串拼接成一个字符串进行sha1加密
    * 3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    */
    const str = [token, timestamp, nonce].sort().join('')
    const signVerified = SHA1(str) === signature
    if (!signVerified) {
        ctx.status = 404 // 可以不设为404，koa默认的状态值就是404
        return
    }
    if (ctx.method === 'GET') ctx.body = echostr
    else if (ctx.method === 'POST') {
        // 实现思路里的第一步
        // 推送的消息会以POST的方式进到这里，暂时用不着，先放着
    }
}
