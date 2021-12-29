### koa项目
- 连接数据库、封装请求 ok
- get、post请求参数 :
    get(ctx.query) 
    post(请求体方式：x-www-form-urlencoded=>ctx.request.body)
- cookie的设置 ok
- jwt设置 jsonwebtoken 实现原理简单了解 ok
- 静态文件获取 
- 图片上传
- 在线压缩视频
- 在线截取视频


### 错误整理
- 连接数据库失败：config值取用错误、使用了内网ip
- 查询where语句，字段是中文时，字符串模板需要增加 ''
- token校验的时候，next前面为什么需要增加await? 

### 参考文献
- koa2+MySQL项目
[koa2+MySQL项目](https://www.bbsmax.com/A/l1dygek0Je/)
[koa2+MySQL项目](https://www.bbsmax.com/A/WpdK6Xp15V/)
[jwt校验设置](https://www.cnblogs.com/zxuedong/p/12629269.html)
