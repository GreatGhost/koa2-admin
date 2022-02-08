### 怎么去掉一个进程
``` cmd
    // 
    netstat -ano | findstr 端口号
    // 查看进程详细信息
    方法一：
    查看进程启动程序，任务管理器关闭即可
    tasklist | findstr 进程号
    方法二：
    // 强制关闭进程
    taskkill -PID 进程号 -F 

```