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

### 部署的问题
- 3000端口连接不到; 添加安全组后还是连接不上 防火墙没有添加端口号
[一文解决阿里云配置服务器端口无法连接问题汇总](https://blog.csdn.net/m0_52255061/article/details/121375530)\

```
    firewall-cmd --zone=public --add-port=80/tcp --permanent
    systemctl restart firewalld.service
    firewall-cmd --list-ports
````
- 前端部署 8001端口没有出现
[前端部署参考文案](https://www.cnblogs.com/tyrone2005/p/10298702.html)
* 先查看 
netstat -tlunp
ps -ef | grep nginx
[nginx 配置serve](https://www.cnblogs.com/jyughynj/p/11207890.html)
查看开启端口
nginx 重启失败
nginx -s reload 报错解决如下
nginx -c /usr/local/nginx/conf/nginx.conf (https://zhuanlan.zhihu.com/p/79823651)
### 微信公众号开发系列问题整理
- natapp安装地址请求请求不到问题 a.端口号要和本地服务端口号一致； b.本地地址不是127.0.0.1而是本地ip地址
- 测试微信公众号平台配置URL提示配置失败原因：token没有配置正确
### nginx 语法指南
- nginx -s reload            # 重新载入配置文件
- nginx -s reopen            # 重启 Nginx
- nginx -s stop              # 停止 Nginx


### 参考文献
* [koa2+MySQL项目](https://www.bbsmax.com/A/l1dygek0Je/)
* [koa2+MySQL项目](https://www.bbsmax.com/A/WpdK6Xp15V/)
* [jwt校验设置](https://www.cnblogs.com/zxuedong/p/12629269.html)

* [微信公众号登录](https://blog.csdn.net/weixin_45418036/article/details/96298817)
* [Koa2微信公众号开发](https://blog.csdn.net/weixin_34143774/article/details/88852927)

PS. 有错误或者建议，欢迎在issues留言；如果觉得写得还可以，欢迎来个star
>>> 读一本好书，就是在和高尚的人谈话。 **——歌德**