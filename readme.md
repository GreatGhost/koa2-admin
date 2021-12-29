## Koa2+MySQL开发管理后台
![每天都在过圣诞节！](https://cdn.pixabay.com/photo/2021/10/26/12/34/christmas-6743572__340.jpg)

### 项目概要
- MySQL、封装请求 ok
- get、post请求参数 :
    get(ctx.query) 
    post(请求体方式：x-www-form-urlencoded=>ctx.request.body)
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
* [koa2+MySQL项目](https://www.bbsmax.com/A/l1dygek0Je/)
* [koa2+MySQL项目](https://www.bbsmax.com/A/WpdK6Xp15V/)
* [jwt校验设置](https://www.cnblogs.com/zxuedong/p/12629269.html)


PS. 有错误或者建议，欢迎在issues留言；如果觉得写得还可以，欢迎来个star
>>> 读一本好书，就是在和高尚的人谈话。 **——歌德**