import '../style.css'
import javascriptLogo from '../javascript.svg'
import { setupCounter } from '../counter.js'

export function render() {
  document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn
    </p>
  </div>
`
}

render()

if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render() // 执行自己的代码
  })
  // import.meta.hot.dispose(() => {
  // })
}

// setupCounter(document.querySelector('#counter'))
