import { subApp } from '../store'
import { register, start, createStore } from "../../core";

const store = new createStore()
window.__STORE__ = store
store.subscribe((newVal) => {
  console.log('主应用获得newVal', newVal)
})

export const startMicroApp = async () => {
  // 注册
  register(subApp.subAppList, {
    bootstrap: [
      (app) => {
        if (app) {
          app.appInfo.headerState.changeHeader(true)
          app.appInfo.footerState.changeFooter(true)
          app.appInfo.loading.openLoading()
        }
      },
    ],
    mount: [
      (app) => {
        if (app) {
          app.appInfo.loading.closeLoading()
        }
      },
    ],
    unmount: [
      () => { },
    ],
  })

  if (window.location.pathname === '/') {
    window.history.pushState(null, null, '/vue3#/index')
  }

  // 启动
  await start()
};
