import * as C from '../constant'
import { lifecycle } from '../lifecycle'
export const rewriteRouter = () => {
    window.history.pushState = patchRouter(window.history.pushState, C.MICRO_PUSH_EVENT)
    window.history.replaceState = patchRouter(window.history.replaceState, C.MICRO_REPLACE_EVENT)

    window.addEventListener(C.MICRO_PUSH_EVENT, listener)
    window.addEventListener(C.MICRO_REPLACE_EVENT, listener)

    // 浏览器返回按钮
    window.onpopstate = async function () {
        await listener()
    }
}

const patchRouter = (event, name) => {
    return function () {
        const e = new Event(name)
        event.apply(this, arguments)
        window.dispatchEvent(e)
    }
}

const listener = async () => {
    if (anotherApp()) {
        await lifecycle()
    }
}

const anotherApp = () => {
    const { pathname } = window.location
    const currentApp = pathname.match(/(\/\w+)/)
    if (!currentApp) {
        return false
    }
    const currentAppName = currentApp[0]
    if (currentAppName === window.__CURRENT_APP__) {
        return false;
    }

    window.__ORIGIN_APP__ = window.__CURRENT_APP__
    window.__CURRENT_APP__ = currentAppName

    return true;
}   