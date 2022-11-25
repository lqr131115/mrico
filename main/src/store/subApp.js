import * as loading from './loading'

import * as appInfo from './index'

export const subAppList = [
  {
    name: 'vue3',
    entry: '//localhost:9001/',
    loading,
    container: '#micro-container',
    activeRule: '/vue3',
    appInfo,
  },
  {
    name: 'react18',
    entry: '//localhost:9002/',
    loading,
    container: '#micro-container',
    activeRule: '/react18',
    appInfo,
  },
];
