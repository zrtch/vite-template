import { defineComponent } from 'vue';
// import '@styles/index.css'
import '@styles/test.less';
import classes from '@styles/test.module.css';
import logo from './assets/vue.svg';

import main from './main?raw';
// console.log(main); // /src/main.js

// import { a } from './test'
// console.log('🤩  a', a)

export default defineComponent({
  setup() {
    return () => {
      return (
        <>
          <div class={`root ${classes.moduleClass}`}>hello vite</div>
          <img src={logo} alt="" />
          <p>111</p>
        </>
      );
    };
  },
});
