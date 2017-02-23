# rntpl
### a simple react native demo with redux

![](animate.gif)

听很多童鞋说，入坑ReactNatiev时，想找个简单一点的入门级的项目看，非常不容易，大多数都是一个高度集成的项目，安装了很多第三方的依赖。

这里我把之前的一个上线项目简化了一下，变成一个简单的react-native-redux框架，里面内容非常简单，上面的gif我们可以清晰的看到。

这个项目由于我打算最后生成一个脚手架开放出去，就没有添加一些网络数据在里面。

项目里只有我临时简单的封装的一个导航栏`navigatorbar`, 后面我会继续把这个组件细化，然后文档在补上，感兴趣的同学可以先做个了解

里面还有一个简单封装的router组件，还很简陋，不过不影响入门童鞋们对RN-Redux的了解。

这个router组件里主要做的事情就是控制我们程序里的所有路由。

> 如果童鞋们想把自己的醒目用`react-native-redux`替换，可以clone到本地，然后在里面添加自己的东西，由于这个项目很简单，只是集成了redux，所有可以放心的定制自己风格的框架。

> 发现有的童鞋clone下来项目老是`Unable resolve module`, 提醒一下千万别忘了`npm install` 或者 `yarn`

> 项目里用了iconfont，不了解的童鞋可以参考 http://www.jianshu.com/p/c35a905deca9

`后面我会在新增加一个分支，把网络请求模块当做插件添加到store里去，敬请期待吧，😝😝😝`