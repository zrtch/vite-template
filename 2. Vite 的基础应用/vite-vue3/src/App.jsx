import { defineComponent } from 'vue'
// import '@styles/index.css'
import '@styles/test.less'
import classes from '@styles/test.module.css'
import logo from './assets/vue.svg'

import test from './main?raw'
console.log(test) // /src/main.js

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <div class={`root ${classes.moduleClass}`}>hello vue jsx</div>
          <img src={logo} alt="" />
        </>
      )
    }
  },
})
