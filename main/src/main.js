import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { startMicroApp } from './utils/startMicroApp';

// 注册、启动子应用
startMicroApp();

createApp(App).use(router()).mount('#micro')
