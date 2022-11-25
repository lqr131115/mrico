export const performScriptByFunc = (scriptText, appName, global) => {
  const scriptStr = `try {
            ${scriptText}
            return window['${appName}']
        } catch (error) {
            console.log('performScript Error:', error);
        }
        `

  return new Function(scriptStr).call(global, global)
}

export const performScriptByEval = (scriptText, appName, global) => {
  const scriptStr = `
    (() => () => {
      try {
        ${scriptText}
        return window['${appName}']
      } catch (err) {
        console.error('runScript error:' + err);
      }
    })()
  `
  return (() => eval(scriptStr))().call(global, global)
}
