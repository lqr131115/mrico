const { execSync } = require("child_process");

const cmdData = {
  win32: 'start',
  linux: 'xdg-open',
  darwin: 'open'
}

execSync(`${cmdData[process.platform]} http://localhost:8080`);
