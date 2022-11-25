## 这是一个简易的微前端框架 :rocket:
- 本框架使用**代理沙箱**进行子应用**隔离**
- 本框架使用**缓存、预加载**对子应用渲染做了简单**优化**
- 本框架使用**发布订阅**实现一个简单的**全局状态管理器**
- Demo使用了**React18、vue3**两种框架**最新版本**的子应用

### 运行
```
npm run start
```
自动下载所有应用所需的依赖（node_modules），可添加参数 '--force'重新下载依赖（可能需要较长时间），如下
```
node ./build/init.js --force && node ./build/run.js
```
也可以添加参数 '--open' 自动打开浏览器
``` js
./build/init.js               // 依赖下载
./build/run.js                // 应用启动
```
### 框架
本框架的**核心逻辑**在文件夹 **./main/core**中，文件夹结构和含义如下
```js
> cache         // 缓存生命周期列表和应用列表
> constant      // 常量
> lifecycle     // 生命周期调用逻辑
> load          // 子应用页面渲染逻辑
> router        // 路由重写和监听
> sandbox       // 代理沙箱
> utils         // 工具函数
```
#### 生命周期
借鉴微前端框架 [qiankun](https://qiankun.umijs.org/zh) 生命周期的设计，本框架设计如下3个生命周期
- 加载 **bootStrap** 
- 渲染 **mount**
- 卸载 **unmount**

主应用和子应用的生命周期类型分别为 *数组* 和 *函数* 
```js
// 主应用
{
    bootStrap:[(app) => {}, ...],
    mount:[(app) => {}, ...],
    unmount:[(app) => {}, ...],
}


// 子应用
{
   function bootstrap(app) {},
   function mount(app) {},
   function unmount(app) {}
}
```

#### 子应用
子应用结构的核心字段如下:
```js
  {
    name: 'vue3',   // 名称
    entry: '//localhost:9001/',  // publicPath
    container: '#micro-container', // 容器选择器
    activeRule: '/vue3', // baseUrl
    ...
  },
```

### 其他
- :warning:**注**： 本框架只适用个人学习，**请勿使用在生产环境**

