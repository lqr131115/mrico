import { getAppList } from "../cache"

export const filterApp = (key, val) => {
    const apps = getAppList().filter((app) => app[key] === val)
    return apps.length ? apps[0] : null
}

export const findAppByName = (name) => {
    return filterApp('name', name)
}

export const findAppByRoute = (route) => {
    return filterApp('activeRule', route)
}

export const findCurrentApp = () => {
    const { pathname } = window.location
    const route = pathname.match(/(\/\w+)/)[0]
    return findAppByRoute(route)
}
