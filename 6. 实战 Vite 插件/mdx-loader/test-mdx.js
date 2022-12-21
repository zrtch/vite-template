import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mdx = require('@mdx-js/mdx')

console.log(mdx.sync("# Hello"));
