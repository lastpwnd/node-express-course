const os = require("os")

const homeDir = os.homedir()
const host = os.hostname()
const machine = os.machine()
const freeMemory = os.freemem()/(Math.pow(2,20))
const upTime = os.uptime()/(3600)

console.log(`Host name -> ${host}`)
console.log(`Home directory -> ${homeDir}`)
console.log(`User's machine architecture -> ${machine}`)
console.log(`Available free memory -> ${(Math.round(freeMemory))} MegaBytes`)
console.log(`System is running for ${(Math.floor(upTime))} hours`)