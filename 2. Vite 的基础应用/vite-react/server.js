
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require("express")

const app = express()

const { createServer: createViteServer } = require("vite")

createViteServer({
  server: {
    middlewareMode: 'html'
  }
}).then((vite) => {
  app.use(vite.middlewares)

  app.listen(4000)
})
