import { getAppList, setAppList, setMainLifeCycle } from './cache'
import { preFetch } from './load'
import { rewriteRouter } from './router'
import { findCurrentApp } from './utils/filter'

rewriteRouter()

export const register = (appList, lifeCycleList) => {
    setAppList(appList)
    setMainLifeCycle(lifeCycleList)
}
export const start = async () => {
    const apps = getAppList()
    if (apps.length === 0) {
        throw Error('子应用注册表不能为空')
    }

    const app = findCurrentApp()
    if (app) {
        const { pathname, hash } = window.location
        const url = pathname + hash

        window.history.pushState(url, app.name, url || app.activeRule)

        window.__CURRENT_APP__ = app.activeRule
    }

    // 预加载
    await preFetch()
}