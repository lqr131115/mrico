export const isFunction = (func) => {
    return typeof func === 'function'
}

export const isLifeCycle = (lifecycle) => {
    return lifecycle && lifecycle.bootstrap && lifecycle.mount && lifecycle.unmount
}