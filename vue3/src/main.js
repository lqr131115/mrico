import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setMain } from './utils/global'

let instance = null;

function render() {
  instance = createApp(App);
  instance
    .use(router)
    .mount('#app-vue3');
}

/**
 * 不是微前端环境
 */
if (!window.__MICRO__) {
  render();
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

// 生命周期：渲染
export async function mount(app) {
  setMain(app)
  render();

}

// 生命周期：卸载
export async function unmount(ctx) {
  instance.unmount();
  instance = null;
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
