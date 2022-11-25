const { spawn, spawnSync } = require('child_process')

module.exports.runShell = (shell) => {
  spawn(shell, { stdio: ['inherit', 'inherit', 'inherit'], shell: true })
}

module.exports.runShellSync = (shell) => {
  spawnSync(shell, { stdio: ['inherit', 'inherit', 'inherit'], shell: true })
}
