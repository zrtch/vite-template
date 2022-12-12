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

    // 开始进行构建的时候调用以及结束构建的调用
    // build.onStart()
    // build.onEnd()

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