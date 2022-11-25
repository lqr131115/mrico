import React from 'react'
import "./index.scss"
import ReactDOM from 'react-dom'
import BasicMap from './src/router';
import { setMain } from './src/utils/global'

export const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react18'))
}


/**
 *  不是微前端环境
 */
if (!window.__MICRO__) {
  render()
}



/**
 *  是微前端环境
 */

// 生命周期：加载
export async function bootstrap(app) {
  const store = window.__STORE__
  const oldData = store.getStore()
  store.updateStore({
    ...oldData,
    from: app.name
  })
}

// 生命周期：挂载
export async function mount(app) {
  setMain(app)
  render()
}

// 生命周期：卸载
export async function unmount(ctx) {
  const { container } = ctx || {}
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
