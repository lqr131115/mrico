import { isLifeCycle } from "../utils/valid"
import { ProxySandBox } from './proxySandbox';
import { performScriptByEval } from './performScript';

// 创建沙箱环境
export const sandbox = (script, app) => {

    // 创建沙箱环境
    const global = new ProxySandBox();

    // 设置微前端环境
    window.__MICRO__ = true;

    // 获取子应用生命周期
    const lifeCycles = performScriptByEval(script, app.name, global.proxy);

    app.sandBox = global;

    if (isLifeCycle(lifeCycles)) {
        app.bootstrap = lifeCycles.bootstrap
        app.mount = lifeCycles.mount
        app.unmount = lifeCycles.unmount
    }

}
