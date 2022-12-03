原文链接：[https://coding.imooc.com/class/chapter/523.html#Anchor](https://coding.imooc.com/class/chapter/523.html#Anchor)

## Vite 从入门到精通，玩转新时代前端构建法则

### Vite 的概要介绍

#### 1-1 关于课程你需要了解

- 开发时效率极高
- 开箱即用，功能完备
- 社区丰富，兼容 rollup
- 超高速热重载
- 预设应用和类库打包模式
- 前端类库无关

构建是现在前端逃不开的话题

- 前端框架时代
- 前端应用越来越复杂
- 学习构建就是提升自己重要的过程

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1669970276973-67a2cbab-2437-498e-8a7e-21ebce890226.png#averageHue=%23fefefe&clientId=udc545b5f-d76d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=316&id=uca14dc01&margin=%5Bobject%20Object%5D&name=image.png&originHeight=316&originWidth=670&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29950&status=done&style=none&taskId=uae80c804-179a-4a38-9215-7942d0f208b&title=&width=670)
在 Vite 当中，我们的请求发发布到 Vite 的 Server 之后，我们会经过 Server App 然后会经过它一大段的 ModuleGraph 的模块管理，然后会注入各种插件的功能，最后通过 Esbuild 保存到它的一个缓存当中，返回给我们的用户 。

#### 1-2 什么是 Vite

官网：[https://cn.vitejs.dev/guide/](https://cn.vitejs.dev/guide/)
v2 版本就转为与 Vue 无关
优点

- 使用简单：基本能把封装的配置都封装掉了，使用上会比 vue-cli，create-react-app，webpack 简单的多
- 快：在开发时是能让你感受没有编译过程的，基本上启动项目就两三秒，实时看见页面的更新
- 便于扩展：它本身是兼容 Rollup 插件的；这些插件在 Vite 基本上都能直接使用的， 拥有了非常成熟的工具的大部分生态；扩展能力很强。

市面上也有类似的工具：

- Snopack：和 Vite 在生产构建时有点区别，Vite 的生产构建是直接用 Rollup 直接打包，而 Snopack 的打包输出跟开发时事一样的，这会导致浏览器的兼容性有一点问题。
- WMR：基本是以 Preact 作为集成的，对第三方框架就没那么友好
- @web/dev-server ：它没有提供官方的框架集成，所以要通过第三方插件来手动的去做，并且使用率不高；所以它的插件集成也没有那么丰富，导致并不好用。

详情可以看官网比较：[https://cn.vitejs.dev/guide/comparisons.html](https://cn.vitejs.dev/guide/comparisons.html)

#### 1-3 Vite 对比其他构建工具的优势

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1669970682467-ab1628a3-d4a4-4717-b816-f248dd4e789c.png#averageHue=%23dad8d1&clientId=udc545b5f-d76d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=485&id=u7a980320&margin=%5Bobject%20Object%5D&name=image.png&originHeight=485&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&size=187328&status=done&style=none&taskId=uc812bfa7-6c9a-44bf-bcdf-3d49ab2d0d3&title=&width=750)

### Vite 的基础应用

#### 2-1 Vite 的优势

####

2-2 Vite 创建 Vue3 项目

####

2-3 Vite 创建 Vue2 的项目

#### 2-4 Vite 创建 React 的项目

####

2-5 Vite 中使用 CSS 的各种功能

#### 2-6 Vite 中使用 Typescript

####

2-7 Vite 中处理静态资源的方法

####

2-8 Vite 集成 eslint 和 prettier

#### 2-9 Vite 中得 env 环境变量
