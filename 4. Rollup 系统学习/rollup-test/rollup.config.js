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
