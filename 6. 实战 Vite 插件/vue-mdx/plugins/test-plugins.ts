import { Plugin } from "vite"

export default (enforce?: 'pre' | 'post'): Plugin => {
  return {
    name: "test",
    config(userConfig) {
      return new Promise((resolve) => { // 这里的config都会进行一个merge
        resolve({
          resolve: {
            alias: {
              '@aaa': '/src/styles'
            }
          }
        }
       )
      })
    },
    configResolved(config) {
      // console.log('🤩  configResolved  config', config.resolve);
    },
    // configureServer 会拿到server的实例，可以对他进行操作
    configureServer(server) {
      // 增加一个中间件
      server.middlewares.use((req, res, next) => {
        if (req.originalUrl === '/test') {
          console.log(11)
          // res.send("hello vite plugin")
        } else {
          next()
        }
      })
    },
    // transformIndexHtml(html) {
    //   // html就是我们index.html的内容,可以对html进行一些处理
    //   // return html.replace('<div id="app"></div>','<div id="root"></div>')
    //   console.log(html);
    // },
    // 可以做一些handleHotUpdate的定制化内容，
    handleHotUpdate(ctx) {
      // 可以通过自定义的事件来告诉客户端应该如何更新这部分的资源
      ctx.server.ws.send({
        type: "custom",
        event: "test",
        data: {
          hello:'world'
        }
      })
    }
  }
}