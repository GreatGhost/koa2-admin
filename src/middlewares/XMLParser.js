// const parseXML = require('xml2js').parseString
// const debug = require('debug')('xml-parse')
// const parse = (req, options = {}) => {
//     return new Promise((resolve, reject) => {
//         let xml = ''
//         req.on('data', chunk => { xml += chunk.toString('utf-8') })
//            .on('error', reject)
//            .on('end', () => parseXML(xml, options, (err, res) => {
//                 if (err) reject(err)
//                 resolve(res)
//         }))
//     })
// }
// ​
// module.exports = async (ctx, next) => {
//     // 这里先尝试直接匹配，匹配失败再到mime库里查询
//     if (ctx.request.type === 'text/xml' || ctx.is('xml')) {
//         try {
//             ctx.request.body = await parse(ctx.req)
//         } catch (e) {
//             debug(e.message)
//         }
//     }
//     await next()
// }



// xmlParse.js
const xml = require('./xmlTool')

module.exports = () => {
    return async (ctx, next) => {
        if (ctx.method == 'POST' && ctx.is('text/xml')) {
            let promise = new Promise(function (resolve, reject) {
                let buf = ''
                ctx.req.setEncoding('utf8')
                ctx.req.on('data', (chunk) => {
                    buf += chunk
                })
                ctx.req.on('end', () => {
                    xml.xmlToJson(buf)
                        .then(resolve)
                        .catch(reject)
                })
            })

            await promise.then((result) => {
                    ctx.req.body = result
                })
                .catch((e) => {
                    e.status = 400
                })

            next()
        } else {
            await next()
        }
    }
}
