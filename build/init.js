const fs = require("fs");
const filePath = require('./path')
const { runShellSync } = require('./util')

const args = process.argv.slice(2)

if (args && args.length && args.includes('--force')) {
  cleanNodeModules()
}

function cleanNodeModules() {
  Object.keys(filePath).forEach(item => {
    runShellSync(`rm -rf ${filePath[item]}/node_modules`)
  })
}

Object.keys(filePath).forEach(item => {
  hasNodeModules(filePath[item])
})

function hasNodeModules(path) {
  const isExit = fs.readdirSync(path).includes('node_modules')
  if (!isExit) {
    runShellSync(`cd ${path} && npm install`)
  }
}

