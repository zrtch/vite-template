import { createApp } from "vue"
import './style.css'
import App from './App'
import Worker from "./worker?worker";
import pkg from '../package.json';
// console.log('🤩  pkg', pkg);

const globModules = import.meta.glob('./glob/*.js ')
console.log('🤩  globModules', globModules);

Object.entries(globModules).forEach(([k, v]) => {
  v().then(m => console.log(k + ':' + m.default));
})

// const worker = new Worker();

// worker.onmessage = function (e) {
//   console.log(e);
// };


createApp(App).mount('#app')
