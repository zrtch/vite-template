### Vite 的基础应用

#### 2-1 Vite 的优势

- 上手非常简单
- 开发效率极高
- 社区成本低（兼容 rollup 插件）

webpack 的配置会包含：

- entry：就是你要编译哪几个文件
- output：你的文件输出在哪里
- module：就是你的 jsx 要通过 babel 进行一个编译
- plugins：就是你的 html 通过 HtmlWeboackPlugin 来生成的

而反观 vite 的配置只需要几行代码：

```jsx
import reactRefresh from '@vitejs/plugin-react-refresh'

export default {
  // 使用reactRefresh这个插件就能让vite支持react并且能提供非常完善的hot modlue reload(热加载)的功能
  plugins: [reactRefresh()],
}
```

更合理的类比

- creat-react-app 需要执行 eject；来把所有的给你做好的配置给你输出到文件根目录下，非常不方便
- vue-cli 的 configureWebpack 和 chainWebpack 去修改 webpack 的配置
- vite 有自身的插件系统；在生态中又兼容了 rollup 插件；基础能力已经非常强大了
- rollup 官方插件：[https://github.com/rollup/plugins](https://github.com/rollup/plugins)

传统的 webpack 启动方式：从入口文件 entry 开始，就把所有的文件打包成一个 Bundle，这个过程就是非常的慢，因为文件会非常的多；
![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1670209898206-09142aed-b2f9-40d8-93a3-0b7d2d07dfc7.png#averageHue=%2329313b&clientId=ue31d12d4-b7ee-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=654&id=ucd143820&margin=%5Bobject%20Object%5D&name=image.png&originHeight=654&originWidth=1350&originalType=binary&ratio=1&rotation=0&showTitle=false&size=199604&status=done&style=none&taskId=ud993ab82-8d9c-49ef-80ee-c57a8eca754&title=&width=1350)
Vite 的启动方式：在启动的时候预编译，需要编译的文件他做一些编译；初次访问时，只需要首页用到的这些文件，这些模块这些组件，而不需要把整个应用全部加载下来，这就节省了非常多加载的内容，同时我们也不需要编译这些文件，所以他会这么的快。他的快还有另外一个原因就是使用了 Esbuild，这个工具在运行开发环境的时候，他会用这个进行文件的编译，而他的运行效率和性能是比 webpack 和 rollup 高非常多的。![image.png](https://cdn.nlark.com/yuque/0/2022/png/1261852/1670221028524-da7c8e31-7819-4c26-9afa-1a97b000d9ee.png#averageHue=%2329313c&clientId=u80f1ba53-c4b0-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=660&id=ud42a480a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=660&originWidth=1278&originalType=binary&ratio=1&rotation=0&showTitle=false&size=240858&status=done&style=none&taskId=uad977706-c57a-4d9d-91f3-cb509280f2f&title=&width=1278)

#### 2-2 Vite 创建 Vue3 项目

`pnpm create vite ` 安装依赖时尽量别使用 npm
webpack 和 rollup 是以 js 文件作为 entry 的，对于 vite 他的编译入口是个 html 文件，让浏览器加载 html 文件，在通过 script 标签加载 main.js，这个 js 的请求到了 vite 的 server 之后，vite 去查找这文件然后才会对他进行一个编译。
vite.config.js：存放我们的对于的 vite 配置的地方

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

Vue2 并没有出现在默认列表；Vue <2.7 的支持：[underfin/vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

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
就拿 vue2 来说可以直接克隆它的项目作为项目启动：[https://github.com/logue/vite-vue2-ts-starter](https://github.com/logue/vite-vue2-ts-starter)

#### 2-4 Vite 创建 React 的项目

#### 2-5 Vite 中使用 CSS 的各种功能

#### 2-6 Vite 中使用 Typescript

#### 2-7 Vite 中处理静态资源的方法

#### 2-8 Vite 集成 eslint 和 prettier

#### 2-9 Vite 中得 env 环境变量
