原文链接：[https://coding.imooc.com/class/chapter/523.html#Anchor](https://coding.imooc.com/class/chapter/523.html#Anchor)
视频链接：[阿里云盘](https://www.aliyundrive.com/drive/folder/62ac28c5026766b7a9704c65ac73d780b187d180)
### Vite 的概要介绍
#### 1-1 关于课程你需要了解

- 开发时效率极高 
- 开箱即用，功能完备
- 社区丰富，兼容rollup
- 超高速热重载
- 预设应用和类库打包模式
- 前端类库无关

构建是现在前端逃不开的话题

- 前端框架时代
- 前端应用越来越复杂
- 学习构建就是提升自己重要的过程

![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1669970276973-67a2cbab-2437-498e-8a7e-21ebce890226.png#averageHue=%23fefefe&clientId=udc545b5f-d76d-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=316&id=uca14dc01&margin=%5Bobject%20Object%5D&name=image.png&originHeight=316&originWidth=670&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29950&status=done&style=none&taskId=uae80c804-179a-4a38-9215-7942d0f208b&title=&width=670)
在Vite当中，我们的请求发发布到Vite的Server之后，我们会经过 Server App 然后会经过它一大段的ModuleGraph的模块管理，然后会注入各种插件的功能，最后通过Esbuild保存到它的一个缓存当中，返回给我们的用户 。
#### 1-2 什么是 Vite
官网：[https://cn.vitejs.dev/guide/](https://cn.vitejs.dev/guide/)
v2 版本就转为与Vue无关
优点

- 使用简单：基本能把封装的配置都封装掉了，使用上会比vue-cli，create-react-app，webpack简单的多
- 快：在开发时是能让你感受没有编译过程的，基本上启动项目就两三秒，实时看见页面的更新
- 便于扩展：它本身是兼容Rollup插件的；这些插件在Vite基本上都能直接使用的， 拥有了非常成熟的工具的大部分生态；扩展能力很强。

市面上也有类似的工具：

- Snopack：和Vite在生产构建时有点区别，Vite的生产构建是直接用Rollup直接打包，而Snopack的打包输出跟开发时事一样的，这会导致浏览器的兼容性有一点问题。
- WMR：基本是以Preact作为集成的，对第三方框架就没那么友好
- @web/dev-server ：它没有提供官方的框架集成，所以要通过第三方插件来手动的去做，并且使用率不高，所以它的插件集成也没有那么丰富，导致并不好用。

详情可以看官网比较：[https://cn.vitejs.dev/guide/comparisons.html](https://cn.vitejs.dev/guide/comparisons.html)
#### 1-3 Vite 对比其他构建工具的优势
Vite对于webpack和rollup是个更High Level的工具；是为了项目构建而生的；而不是单纯的js构建

- High Level API；  而对应的webpack是Low Level API。
- Vite不包含自己编译能力 ，自身不参与编译；只是集成了Rollup功能；启动了dev-serve；帮我们中间进行一个串联；去管理这些模块的图谱；去监听文件的更新来进行HMR的推送。
- 开发时完全基于ESM加载方式。

Webpack：他相当于是build工具，他希望把所有的可以考虑的加载的全部加载进去；同时他也希望他的核心功能帮助其他的功能来进行实现；比如可以基于webpack去实现一个webpack-dev-server；也有各种不同编译的方式
Rollup：他是一个集中式，更加专一的工具；诞生的目的就是为了Build ESM的Module；然后同时他是只专注于build Javascript，而不靠谱平台的这么一个工具；他不会有专有的函数在里面，会遵循ESM的标准，然后它build出来的代码就符合像我们需要的common.js的module标准，它的目标更多的是为了工具类库来去使用的，最初的初衷就没有为了普通的前端项目来服务。
Vite：他的目标是我们项目开发，不像webpack和rollup是一个工具；然后执行是构建，vite就更加的上层，他是想要帮助我们更好的更方便的开发一个项目，初衷就是为了方便，快速，体验更好。
webpack更全面；rollup更专一；vite更好用
减少了很多配置量：

- dev-server：vite就自动集成了dev-server；vite的核心内容也是dev-server；如果用webpack dev server基本是逃不掉的。
- 各类loader：不需要配置各类 loader；比如说在webpack我们要配置css loader style loader，js的double loader，各种各样的loader；像这些 vite基本给你内置了；他也是通过插件的形式给你去做的，只是提前给你预设好了；开箱即用。
- build命令：可以build一个类库，也可以build一个项目；build的时候使用的是纯粹的rollup
#### 1-5【讨论题】谈谈你对于构建工具得认识
聊一聊各位自己配置过的构建工具，直接用vue-cli或者create-react-app的不算啊，需要知道底层工具，并且进行过配置，搭配命令启动或者脚本启动。可以聊聊你为什么选择这个工具，有什么好处有什么不好用的地方。

- 如果没有用过，可以自己尝试在同一个项目中用webpack和rollup一起配置一下
- 可以去搜索—下有哪些主流的构建工具
- webpack的生态最为丰富
- rollup的大包结果更符合常规js
- parcel最为简单
### Vite 的基础应用 
#### 2-1 Vite 的优势

- 上手非常简单
- 开发效率极高
- 社区成本低（兼容rollup插件）

webpack的配置会包含：

- entry：就是你要编译哪几个文件
- output：你的文件输出在哪里
- module：就是你的jsx要通过babel进行一个编译
- plugins：就是你的html通过HtmlWeboackPlugin来生成的

而反观vite的配置只需要几行代码：
```jsx
import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  // 使用reactRefresh这个插件就能让vite支持react并且能提供非常完善的hot modlue reload(热加载)的功能
	plugins: [reactRefresh()]
}
```
更合理的类比

- creat-react-app需要执行eject；来把所有的给你做好的配置给你输出到文件根目录下，非常不方便
- vue-cli的configureWebpack和chainWebpack去修改webpack的配置
- vite有自身的插件系统；在生态中又兼容了rollup插件；基础能力已经非常强大了
- rollup官方插件：[https://github.com/rollup/plugins](https://github.com/rollup/plugins)

传统的webpack启动方式：从入口文件entry开始，就把所有的文件打包成一个 Bundle，这个过程就是非常的慢，因为文件会非常的多；
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1670209898206-09142aed-b2f9-40d8-93a3-0b7d2d07dfc7.png#averageHue=%2329313b&clientId=ue31d12d4-b7ee-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=654&id=ucd143820&margin=%5Bobject%20Object%5D&name=image.png&originHeight=654&originWidth=1350&originalType=binary&ratio=1&rotation=0&showTitle=false&size=199604&status=done&style=none&taskId=ud993ab82-8d9c-49ef-80ee-c57a8eca754&title=&width=1350)
Vite的启动方式：在启动的时候预编译，需要编译的文件他做一些编译；初次访问时，只需要首页用到的这些文件，这些模块这些组件，而不需要把整个应用全部加载下来，这就节省了非常多加载的内容，同时我们也不需要编译这些文件，所以他会这么的快。他的快还有另外一个原因就是使用了Esbuild，这个工具在运行开发环境的时候，他会用这个进行文件的编译，而他的运行效率和性能是比webpack和rollup高非常多的。![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1670221028524-da7c8e31-7819-4c26-9afa-1a97b000d9ee.png#averageHue=%2329313c&clientId=u80f1ba53-c4b0-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=660&id=ud42a480a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=660&originWidth=1278&originalType=binary&ratio=1&rotation=0&showTitle=false&size=240858&status=done&style=none&taskId=uad977706-c57a-4d9d-91f3-cb509280f2f&title=&width=1278)
#### 2-2 Vite 创建 Vue3 项目 
`pnpm create vite ` 安装依赖时尽量别使用npm
webpack和rollup是以js文件作为entry的，对于vite他的编译入口是个html文件，让浏览器加载html文件，在通过script标签加载main.js，这个js的请求到了vite的server之后，vite去查找这文件然后才会对他进行一个编译。
vite.config.js：存放我们的对于的vite配置的地方
```javascript
// 如果想使用jsx就得安装另一个依赖
pnpm i @vitejs/plugin-vue-jsx -D
// 然后在vite.confing.js引入并且使用它
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(),vueJsx()]
})
```
#### 2-3 Vite 创建 Vue2 的项目
Vue2并没有出现在默认列表；Vue <2.7 的支持：[underfin/vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)
```javascript
// 首先安装它；也要安装vue2.0的版本
npm install vite-plugin-vue2 -D
// 然后在 vite.config.js 引入使用
import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [
    createVuePlugin(/* options */)
  ],
}
```
当然也可以访问：[https://github.com/vitejs/awesome-vite#plugins](https://github.com/vitejs/awesome-vite#plugins)就能看到一些关系其他不同框架的插件
就拿vue2来说可以直接克隆它的项目作为项目启动：[https://github.com/logue/vite-vue2-ts-starter](https://github.com/logue/vite-vue2-ts-starter)
#### 2-4 Vite 创建 React 的项目 
使用插件的名称叫：FastRefresh，解决了很多react-hot-loader无法解决的问题，并且速度更快；支持局部更新
官方插件地址：[https://www.npmjs.com/package/@vitejs/plugin-react](https://www.npmjs.com/package/@vitejs/plugin-react)
```html
// 先执行安装命令；然后选择react版本
pnpm create vite
// 在index.html里面的main.jsx 会经过一系列的编译，返回js的内容；只关心返回的内容是不是js
<script type="module" src="/src/main.jsx"></script>
```
#### 2-5 Vite 中使用 CSS 的各种功能

1. **css variable**：推荐我们使用原生css variable来取进行样式维护；
```css
// :root 代表的是命名空间；在下面定义的所有的变量；在接下来所有的样式的类当中都可以去使用
:root { 
  --main-bg-color: brown
}
// 代表我们引用了这个变量
.root {
  color: var(--main-bg-color); 
}
```

2. **postcss**：vite也集成了postcss，在根目录下新建 postcss.config.js，
```javascript
module.exports = {
  plugins: [require('@postcss-plugins/console')]
}

然后在css中使用即可
.root {
    @console.log hello
  color: var(--main-bg-color);
}
```

3. **@import alias**：使用@ 路径映射来去快速的指向style目录，就会很简单；当然vite也是做了处理的
```javascript
// vite.config.js
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
  	alias: {
      '@styles': '/src/styles'
    }
  }
})

// 这样就不用相对路径了，直接@styles使用即可
import './styles/index.css' ---> import '@styles/index.css'

// 而且两个css之间也可以互相使用，只需在other.css 定义好你的样式即可
@import url('@styles/other.css');
```

4. **css-modules**：我们希望css的类名不是纯粹根据我们写的那个类名，而是他有个映射关系，他会给我们进行一个编译，这样类名就变成一个无意义的了，并且可以做一个字符串的收缩，同时可以去重。

只需要在定义文件时加上 .module即可；test.module.css
```jsx
import classes from '@styles/test.module.css'

export default defineComponent({
  setup() {
    return () => {
      return <div class={`root ${classes.moduleClass}`}>hello vue jsx</div>
    }
  },
})
```

5. **css pre-processsors**：预处理的工具，在vite当中也是支持的；比如我们要使用less，我们只需要安装下less，然后再对应的是目录下新建less，最终使用它即可。
```css
@bgColor: red;

.root{
  background-color: @bgColor;
}
```
#### 2-6 Vite 中使用 Typescript
因为vite对于ts只是编译语法；而不是编译文件；使用 tsc --noEmit来去只做校验，不做文件的输出。
```javascript
// 在build的时候加上 tsc --noEmit
"scripts": {
  "dev": "vite",
  "build": "tsc --noEmit && vite build",
  "preview": "vite preview"
},
```
然后要新增tsconfig.json文件里进行配置：[https://www.jianshu.com/p/44b2a9cb98b5](https://www.jianshu.com/p/44b2a9cb98b5)
isolatedModules：指定是否将每个文件作为单独的模块，默认为true，他不可以和declaration同时设定；

- 对于这种类型的export 需要进行处理
- 不是一个模块的文件
#### 2-7 Vite 中处理静态资源的方法 
vite提供了几个import 的参数，帮助我们以固定的方式去引入这个文件

- url：把文件放在某个地方，返回某个url
- raw：把它的字符串的内容给你返回回来 
- worker / worker inline：这个用于webworkder（帮助我们更高性能的构建应用的工具）
- [Web Assembly](https://www.assemblyscript.org/introduction.html)：一种很特殊的在浏览器可以运行的二进制的内容；类似ts的工具 
```css
// ?url 就把我们当前的路径返回了
import test from './main?url' 
console.log('🤩  test', test) // 🤩  test /src/main.js

// ?raw 就把我们文件的代码以字符串的形式引入进来
import test from './main?raw' 
console.log('🤩  test', test) //  import { createApp } from 'vue' ...

// 引入package.json文件
import pkg from '../package.json';
console.log('🤩  pkg', pkg); // 输出对应信息

// ?worker 
import Worker from "./worker?worker";

const worker = new Worker();
worker.onmessage = function (e) {
  console.log(e);
};

// 拿到 Web Assembly，然后使用它，fib.wasm 通过ts文件生成
import init from './fib.wasm'
init().then((m)=>{
  console.log(m.fib(10))
})
```
#### 2-8 Vite 集成 eslint 和 prettier
eslint：专门用来设置自定义代码规则。[https://www.jianshu.com/p/9445b232c54b](https://www.jianshu.com/p/9445b232c54b)
prettier：代码格式化工具。[https://prettier.io/](https://prettier.io/)
husky：Git Hook 工具，借助 husky 在 git 提交进行一些自动化操作。 [husky代码规范](https://blog.csdn.net/huangpb123/article/details/102690412)
#### 2-9 Vite 中得 env 环境变量

- MODE：我们现在的模式的分区
- BASE_URL：本地链接
- PROD：当然环境是否是正式环境
- DEV：当前环境是否是开发环境

 .env 文件有不同的后缀就会在不同环境下用到；.env.development 开发环境；.env.production 生产环境
```typescript

  "scripts": {
    "dev": "vite --mode test", // 通过不同的mode来运行不同的环境
  },
```
### Vite 的高级应用
#### 3-2 Vite 中的 HMR 热更新功能
 就比如我们在App.jsx里面新增了一个p标签，但是页面也会马上更新这个p标签， 并没有刷新页面抖动的那一下，这就是热更新。vite.config.js里面的 vueJsx 这个插件已经给我们加进去了， vueJsx() 已经实现掉了。
首先进入页面有main.js的请求，然后改变文件之后，就会有个新的main.js的请求；新的main.js就会替换老的main.js；然后形成一个热更新的过程。在server端发现了数据更新，然后他推一个事件到前端浏览器里，浏览器知道我们哪个文件更新了，我们就去请求这个文件，然后去替换浏览器老的模块。
#### 3-3 Vite 的 glob-import 批量导入功能
glob-import：通过一组类似于正则表达式来引入一组的js文件。比如做多语言的支持，就可以引入一个文件夹上面所有语言的json文件。整个vite提供这个 globa-import 的功能来自于第三方的库[fast-glob](https://github.com/mrmlnc/fast-glob)，这个库提供了vite让我们可以动态匹配去引入具体的一个匹配模式的一系列文件的方式。
```typescript
const globModules = import.meta.glob('./glob/*') // * 代表glob文件夹所有文件
const globModules = import.meta.glob('./glob/*.js') // *.js 代表所有js文件
console.log('🤩  globModules', globModules);

Object.entries(globModules).forEach(([k, v]) => {
  v().then(m => console.log(k + ':' + m.default));
})
```
#### 3-4 Vite 性能揭秘---预编译优化 
预编译作用：Vite在第一次启动之前他会先去把这些我们所依赖的这些包进行一个编译，然后放到一个catch里面，之后我们所有用到第三方库的包就会直接从catch里面取。
预编译过程中有个非常重要的事情：把非ESModule的文件给他编译成ESModule，因为在我们开发的时候，vite是依赖浏览器远程的ESModule的加载方式去加载文件的。
如果用了第三方的插件，第三方帮你增加了一些依赖，而这些依赖又不是ESModule的依赖，这个时候vite在项目启动初期是发现不了我们依赖的这个文件的，因为它是由插件产生的，可以加到配置项里面
```typescript
export default defineConfig({
  optimizeDeps: {
    exclude: ["react"]
  }
})
```
预编译还有个功能：就是把零散的文件给你打包到一起。
进入项目的时候在network里，比如react.js就会设置：Cache-Control: max-age=31536000,immutable，这样我们浏览器就不用重新发送请求，而可以直接使用浏览器的缓存。
如果项目里面的main.js我们没改变就是：cache-control: no-cache。
#### 3-5 在非 Node 服务中集成 Vite
这些服务不是运行js的。比如一些传统的老项目，他们的数据是要后端服务的模板引擎把数据写到html里面来进行返回的，比如一些使用JSTL的java项目。入口html是存在java项目里面的，因为他们要解析这个模板返回这个html，而我们写的前端应用关注的是js如何嵌入到这个html里面成为他的一个标签，这里面就会存在引入路径的问题，因为vite是会自动引入路径的，那如果html是在别的服务里面，就没有人帮助我们去做这个事情。
#### 3-6 Nodejs 集成 Vite 开发时的 SSR
启动了一个vite的dev-server；在nodejs中集成vite的dev-server方法；集成server大部分情况下就是为了ssr
在ssr模式下面，对于我们的请求的管理会转交给我们自己的server，而不是由vite去提供，这个时候我们需要在服务端渲染出html，提供给response，
```javascript
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require("express")

const app = express()

const { createServer: createViteServer } = require("vite")

createViteServer({
  server: {
    middlewareMode: 'ssr'
  }
}).then((vite) => {
  app.use(vite.middlewares)

  app.listen(4000)
})
```
#### 3-7 Node 集成正式 build 的 Vite 应用的 SSR 
[https://cn.vitejs.dev/guide/ssr.html#setting-up-the-dev-server](https://cn.vitejs.dev/guide/ssr.html#setting-up-the-dev-server)
#### 3-8 通过 SSR 功能实现静态站点导出 
[https://cn.vitejs.dev/guide/static-deploy.html](https://cn.vitejs.dev/guide/static-deploy.html)
#### 3-9 Vite 配置项一览 
常规配置项：[https://cn.vitejs.dev/config/shared-options.html](https://cn.vitejs.dev/config/shared-options.html)
build配置：[https://cn.vitejs.dev/config/build-options.html](https://cn.vitejs.dev/config/build-options.html)
### Rollup 系统学习
####  4-1 Rollup 介绍 
非常成熟的前端构建工具，rollup能够打包一个大部分场景的build。开源类库优先选择，它是你以ESM标准为目标的构建工具。打包的时候能够把一些不需要的代码给他去掉，减少代码的文件大小，提高运行性能。
首先全局安装：cnpm i -g rollup
```javascript
// 在index.js中
console.log('hello rollup');
// 然后运行就会输出dist.js文件
rollup -i index.js --file dist.js 
// 输出结果给我们包含了一大块的关于umd的模块管理的功能
rollup -i index --file dist.js --format umd 
// cjs: 就会是 require的语法
rollup -i index --file dist.js --format cjs
// esm: 就和我们平时代码风格差不多
rollup -i index --file dist.js --format es
// iife: 就是自执行的函数
rollup -i index --file dist.js --format iife
```
Tree Shaking：它只会打包我们用到的代码，不会打包没有用到的代码。这就非常有用了，因为整个代码，实际上用的一些第三方类库，可能只用到其中一部分，但是他们的类库很大， 如果打包的时候把所有的代码打包进来，那么整个js会有很多我们用不到的代码，能去掉这部分肯定对我们应用的性能有很大的提升。这就是Tree Shaking的作用，也是rollup最吸引人的。
```javascript
// a.js
export const funA = () => {
  console.log('A');
};
export const funB = () => {
  console.log('B');
}

// 在index.js只引入funA
import { funA } from './a'
funA()
console.log('hello rollup');

// 然后在执行rollup -i index --file dist.js --format es；只会有funA的代码
const funA = () => {
  console.log('A');
};

funA();
console.log('hello rollup');
```
#### 4-2 ES Module详解
![img.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1670551169122-2f53f5d1-1a09-40ed-8f95-9c46336d2eb2.png#averageHue=%23ece9d6&clientId=ud9dbc161-fbe0-4&crop=0&crop=0&crop=1&crop=1&from=drop&id=u58b97c38&margin=%5Bobject%20Object%5D&name=img.png&originHeight=3586&originWidth=1846&originalType=binary&ratio=1&rotation=0&showTitle=false&size=961805&status=done&style=none&taskId=ua8738e0d-67bd-4358-b3ac-c3ca549ed41&title=)
在具名导入时，我们可以同时进行重命名，比如 `import { useEffect as myUseEffect } from "react"`就可以在引入时给变量进行一个新的命名。
```javascript
import * as React from 'react'; // 这里 * 对应的其实就是react模块中所有具名导出
```
```javascript
// export 的使用方式相对更丰富点
export default xxx // 默认导出
export const name = 'joky' // 具名导出
const age = 18
export { age } // 集合形式的具名导出
export { age as Jock } // 导出并重命名
export * from 'another-module' // re- export 重新导出
export { someValue } from 'another-export' // 具名重新导出 
```
在网页上使用ES Module，这里的 type="module" 是不能省略的，浏览器只会对加了这个属性的js脚本采用ES Module的形式进行解析，不然会报错。在浏览器解析并执行之后，对文件内的 import语句，浏览器则会根据其路径继续请求其依赖的模块，也就是说只有真正被依赖的js模块才会被真正的加载。
```javascript
<srcipt type="module" src="/srx/main.js"></srcipt>
```
动态加载模块：ES Module 提供了动态导入模块的工具函数：import()，它接收一个字符串作为引入的模块路径，比如 import("./router.js")就表示现在我需要加载 router 这个模块。该函数就返回一个Promise，当模块加载成功之后会调用then，反之则进入catch，在then中我们会拿到对应模块的所有导出：
```javascript
import('./router.js').then(m => {
  m.sayHello()
})
```
ES Module 和 Common JS 模块的区别

- Canmon JS模块通过 require 函数和 module对象来进行模块管理，而这两个函数则是在JS脚本执行前，有JS引擎通过VM进行注入的全局时象，本质上他们就是JS的函数或者对象，可以在任意 地方被引用和使用，他们运行的同时也是JS运行的同时。
- 而ESModule的 import 和 export则不同，他们是关键字，在脚本被语法解析还没有执行时，就已经可以知道该模块导入或者导出了什么内容，本质上这两个模块管理方式的执行时机就是不同的,
- import导入的内容是静态的不允许修改的
- 而require引入的对象本身就是原始对象的引用，可以直接进行修改
#### 4-3 Rollup 的命令行使用 

- `rollup -v`：查看rollup 版本
- `rollup -i index.js --file dist.js --format umd`：-i 代表输入文件；--file 代表输出文件；--fromat 代表需要输出的文件类型
- `rollup -i index.js -i a.js --dir dist`：多个输入文件，然后输出到文件夹
   - `rollup -i index.js --format iife`：输出为自执行函数
   - `rollup -i index.js --format cjs`：输出为Common JS代码
   - `rollup -i index.js --format es`：最流行的，通过import去引入模块的
   - `rollup -i index.js --format umd`：把CommonJS，AMD，iife 这几种规范放在一起都去兼容的文件
- `rollup -i index.js --file dist.js --format cjs --watch`：监听源文件
- `rollup -c rollup.config.js`：运行配置好的rollup.config.js文件
- `rollup --config rollup.config.js --environment MODE:loca`：environment区分环境
-  rollup插件：[https://github.com/rollup/plugins](https://github.com/rollup/plugins)
#### 4-4 Rollup 配置文件使用 
```javascript
//在 package.json里面进行配置
{
	 "type": "module", // 不然会报错
	  "scripts": {
    "test": "rollup -c rollup.config.js"
  },
}
```
` pnpm i @rollup/plugin-node-resolve`
` pnpm i rollup-plugin-terser `
```javascript
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'index.js',
    external: ['react'], // external作用就是有些包我们不想让他打包进去，就可以设置
    plugins: [resolve(), commonjs(), json()],
    output: {
      file: 'dist/index.es.js', // 指定输出目录dist
      format: 'es',
      plugins: [terser()], // 在output也可以使用plugins，terser的作用就是压缩代码
      banner: "/** hello this is banner **/" // 注释的作用
    },
  },
  {
    input: 'index.js',
    plugins: [resolve(), commonjs(), json()],
    external: ['react'],
    output: {
      file: 'dist/index.umd.js',
      format: 'umd',
      name: 'Index',
      banner: "/** hello this is banner **/" // 注释的作用
    },
  },
]

```
#### 4-5 Rollup 插件功能解析（上）  
rollup插件：[https://github.com/rollup/plugins](https://github.com/rollup/plugins)
rollup的插件机制：通过输入的内容，会经过rollup核心的代码的处理，接下来通过调用不同的插件，进过这些插件对这个代码或者对文件内容的处理，最后形成一个输出文件 emit file之后，整个文件build就结束了。
Rollup Hook（钩子）：对应的不同的节点，他会主动勾出在插件设置的内容然后它去调用它得到一个新的结果。
通用配置：include；exclude。
三个官方插件：

- alias：提供了为模块起别名的功能
- babel：让我们提前使用js的新特性，把最新的语法转为es5
- replace：用途是在打包时动态替换代码中的内容

大部分的插件可以直接在Vite中用，因为他是继承于rollup插件的
安装 alias ：`pnpm i @rollup/plugin-alias `
```javascript
import alias from '@rollup/plugin-alias'

export default [
  {
    plugins: [resolve(), alias({
      entries: { a: './a' }
    }), commonjs(), json()],
	}
]
```
```javascript
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/main.js',
  format: 'cjs',
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // 仅仅转译我们的源码
    })
  ],
  dest: 'bundle.js'
};
```
```javascript
import replace from 'rollup-plugin-replace'
export default {
  input: ...,
  output: ...,
  plugins: [
  replace({
      __SAM__: true //将__SAM__替换为true
    }),
  ]
}
```
#### 4-7 Rollup 常用插件盘点 

- rollup-plugin-commonjs：用于将CommonJS模块转换为ES6模块，以便Rollup可以处理它们。
- rollup-plugin-node-resolve：解析npm模块的路径，以便Rollup可以找到它们。
- rollup-plugin-terser：压缩JavaScript代码，以提高性能。
- rollup-plugin-babel：使用Babel编译JavaScript代码，以支持更新的JavaScript语法和特性。
- rollup-plugin-replace：可以在打包时替换模块中的变量。
- TypeScript，eslint，image，strip，wasm
#### 4-8 Esbuild 的使用教程  
 esbuild使用Go语言开发， 没有配置文件这个概念；不能编译到es5 
```javascript
// 安装 
pnpm i esbuild -D
// 在命令行中输出
npx esbuild index.js 
// 在文件中输出
npx esbuild index.js --outfile=dist.js
// 输出到文件夹,按照原来的文件名
npx esbuild index.js --outdir=test
// 打包的操作
npx esbuild index.js --outfile=dist.js --bundle   
// 编译到node
npx esbuild index.js --outfile=dist.js --platform=node
// 输出格式为commonjs 
npx esbuild index.js --outfile=dist.js --platform=node --format=cjs 
// 监听文件
npx esbuild index.js --outfile=dist.js --platform=node --format=cjs --watch
```
#### 4-9 Esbuild 插件的开发方式
```javascript
import esbuild from 'esbuild'
import fs from 'fs'

// 插件功能的实现
let exampleOnLoadPlugin = {
  name: 'example',
  setup(build) {
    // onResolve作用是告诉esbuild某一类文件我们如何处理它;进行文件类型的区分
    build.onResolve({ filter: /\.txt$/ }, async (args) => ({
      path: args.path,
      namespace: 'txt', // 返回namespace来告诉后续的插件我们这个文件是怎样的类型
    }))

    // onLoad只需要关心namespace下面txt的文件；对文件的内容进行处理
    build.onLoad({ filter: /\.*/, namespace: 'txt' }, async (args) => {
      let text = await fs.promises.readFile(args.path, 'utf8')
      return { // 这里的retrun会告诉esbuild该如何处理它
        contents: JSON.stringify(text.split(/\s+/)),
        loader: 'json', // contents需要经过json这个loader去处理才能给esbuild用
      }
    })

    console.log(build.initialOptions) // 配置选项
  },
}

esbuild
  .build({
    entryPoints: ['index.js'],
    bundle: true,
    outdir: 'test',
    loader: {
      '.png': 'dataurl'
    },
    plugins: [exampleOnLoadPlugin]
  }).catch(() => process.exit(1))
```
### Vite 插件系统详解
#### 5-1 Vite 插件开发概述
命名规范：

- rollup-plugin-xxx：使用rollup以及vite的插件
- vite-plugin-xxx：仅仅只是支持vite的插件

在dev-server启动的时候，它会调用 options 和 buildStart 这两个钩子 ，会调用一次， 文件更新不会调用。
每个模块：resolveld，load，transform；
在dev-server关闭时，会调用 buildEnd 和 closeBundle 这两个钩子。
modulePased不会被调用，为了防止vite整体的对代码的去执行一个AST的解析，AST解析是一个比较慢的操作，vite在开发时代码最终编译产出是通过esbuild来做的，执行完rollup插件会传给esbuild
rollup插件兼容vite要符合以下条件：

-  没有使用moduleParsed钩子
- 它在打包钩子和输出钩子之间没有很强的耦合 

vite独有的钩子：

- config：用于插件当中根据其他的配置来去更新整体的config，return的对象被合并到整个vite的config当中
- configResolved：所有的插件对应的config都执行过之后得到一个最终的config，无法更改。
- transformIndexHtml：入口的html文件，可以在这个函数做一些操作
- handleHotUpdate：去处理热更新的时候可以做一些对于自己特殊文件的特性处理，让热更新更全面强大
#### 5-2 Vite 插件的执行时机
vite当中有是三个执行时机

- pre：最快被执行的这部分插件
- normal：vite的一些核心插件
- post：是在vite的build之后，用于插件代码构建的工作

vite的插件执行文件编译是要我们有请求的时候它才是累累的去编译，而不是项目一起动就全部编译，不然就变得像webpack一启动要等很久才会真正的启动开始。
#### 5-3 Vite 插件 API 详解
config：
configResolved：
configureServer：
transformIndexHtml：
handleHotUpdate：
#### 5-4 HMR-API 详细解析（上）
原文链接：[Vite HMR API](https://blog.csdn.net/wu_xianqiang/article/details/127713347)
模块热替换（hot module replacement）的简称，指的是在应用运行的时候，不需要刷新页面就可以直接替换、增删模块。vite的热替换webpack的实现类似，都是通过websocket建立服务端和浏览器的通信，这样文件发生变动就可以实时反应到浏览器中。
vite的热更新是和webpack不一样的，webpack是设计了一整套叫做模块代理的功能。vite是基于esmodule加载方式的，它是不推荐去做模块代理的方式去实现hmr的api。
Vite 通过特殊的 import.meta.hot 对象暴露手动 HMR API。
必需的条件守卫
```javascript
// 首先，请确保用一个条件语句守护所有 HMR API 的使用，这样代码就可以在生产环境中被 tree-shaking 优化：
if (import.meta.hot) {
  // HMR 代码
}

```
hot.accept(cb)：要接收模块自身，应使用 import.meta.hot.accept，参数为接收已更新模块的回调函数：
```javascript
export const count = 1

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    console.log('updated: count is now ', newModule.count)
  })
}
```
#### 5-5 HMR-API 详细解析（下）
hot.dispose(cb)：一个接收自身的模块或一个期望被其他模块接收的模块可以使用 hot.dispose 来清除任何由其更新副本产生的持久副作用：
```javascript
function setupSideEffect() {}

setupSideEffect()

if (import.meta.hot) {
  import.meta.hot.dispose((data) => {
    // 清理副作用
  })
}
```
#### 5-6 vite-vue3-jsx 插件概览
[https://github.com/vitejs/vite/tree/v2/packages/plugin-vue-jsx](https://github.com/vitejs/vite/tree/v2/packages/plugin-vue-jsx)
#### 5-7 vite-vue3-jsx 插件源码解析之配置和产出
源码：[https://github.com/vitejs/vite/blob/v2/packages/plugin-vue-jsx/index.js](https://github.com/vitejs/vite/blob/v2/packages/plugin-vue-jsx/index.js)
#### 5-8 vite-vue3-jsx 插件详解之 HMR
源码：[https://github.com/vitejs/vite/blob/v2/packages/plugin-vue-jsx/index.js](https://github.com/vitejs/vite/blob/v2/packages/plugin-vue-jsx/index.js)
#### 5-9 vite-vue3-jsx 插件解析之 SSR
源码：[https://github.com/vitejs/vite/blob/v2/packages/plugin-vue-jsx/index.js](https://github.com/vitejs/vite/blob/v2/packages/plugin-vue-jsx/index.js)
### 实战Vite插件
#### 6-1 Ast语法树介绍
代码其实是写给人看的，机器看不懂代码，但是机器可以认识Ast结构体。
![ast.jpg](https://cdn.nlark.com/yuque/0/2022/jpeg/1261852/1671608929746-768ee35f-e8ce-4682-9c69-7f4fdb73c7aa.jpeg#averageHue=%23e3eade&clientId=u9bc24461-2f7b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=1785&id=u4b296aa0&margin=%5Bobject%20Object%5D&name=ast.jpg&originHeight=1785&originWidth=1843&originalType=binary&ratio=1&rotation=0&showTitle=false&size=676906&status=done&style=none&taskId=ub1a0df15-fe2b-48d2-a514-f45f372f261&title=&width=1843)
#### 6-2 MDX 语法介绍和插件设计
官网：[https://mdxjs.com/](https://mdxjs.com/)
MDX = MD + JSX -> JSX；就是markdown加上JSX然后最后把这些书写的内容给他统一转换成JSX，就是在markdown基础上了加上了 JS。
如何实现：把 MDX Code通过 MDX 插件转成一个 JSX的语法，这个JSX可以是Vue的也可以是react的。
#### 6-3 MDX 的使用以及 mdx-loader 的原理
安装`pnpm i @mdx-js/mdx -D`
require 报错解决方式：这是由于从node.js 14版及以上版本中，require作为COMMONJS的一个命令已不再直接支持使用，所以我们需要导入createRequire命令才可以
```javascript
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
```
```javascript
// 新建test-mdx.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mdx = require('@mdx-js/mdx')

console.log(mdx.sync("# Hello"));
// 运行 node test-mdx.js 就会输出以下代码，就是jsx的文件

/* @jsx mdx */

const makeShortcode = name => function MDXDefaultShortcode(props) {
  console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope")
  return <div {...props}/>
};

const layoutProps = {

};
const MDXLayout = "wrapper"
export default function MDXContent({
  components,
  ...props
}) {
  return <MDXLayout {...layoutProps} {...props} components={components} mdxType="MDXLayout">
    <h1>{`Hello`}</h1>
    </MDXLayout>;
}
;
MDXContent.isMDXComponent = true;
```
#### 6-4 MDX 如何配合 React 使用
[https://github.com/jxnblk/mdx-deck](https://github.com/jxnblk/mdx-deck)
