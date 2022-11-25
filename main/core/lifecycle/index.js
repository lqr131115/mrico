import { getMainLifeCycle } from "../cache"
import { htmlLoader } from "../load"
import { findAppByRoute } from "../utils/filter"

export const lifecycle = async () => {
    const preApp = findAppByRoute(window.__ORIGIN_APP__)
    const nextApp = findAppByRoute(window.__CURRENT_APP__)

    if (!nextApp) {
        return
    }

    if (preApp) {
        await unmount(preApp)
    }

    await bootstrap(nextApp)
    await mount(nextApp)
}


export const bootstrap = async (app) => {
    // runMainLifeCycle 必须先执行
    await runMainLifeCycle('bootstrap', app)

    // 将子应用的生命周期挂载到app上
    await htmlLoader(app)

    app && app.bootstrap && await app.bootstrap(app)
}

export const mount = async (app) => {
    app && app.mount && await app.mount(app)
    await runMainLifeCycle('mount', app)
}

export const unmount = async (app) => {
    app && app.unmount && await app.unmount(app)
    await runMainLifeCycle('unmount', app)
}

export const runMainLifeCycle = async (type, app) => {
    const lifeCycleList = getMainLifeCycle()
    await Promise.all(lifeCycleList[type].map(async (life) => await life(app)))
}
