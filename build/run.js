const path = require('path')
const filePath = require('./path')
const { runShell, runShellSync } = require('./util')

const args = process.argv.slice(2)

// 启动项目
function runChild() {
  Object.keys(filePath).forEach(item => {
    const childPath = filePath[item]
    runShell(`cd ${childPath} && npm start`)
  });

  if (args && args.length && args.includes('--open')) {
    console.log('start success, open browser now');
    runShellSync(`node ${path.join(__dirname, './open.js')}`)
  }
}

runChild()
