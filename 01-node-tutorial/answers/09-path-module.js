const path = require('path')
const pathArray = ["content", "subfolder", "test.txt"]

console.log(`Separating symbol -> ${path.sep}`)

const joinedPath = path.join( `${path.sep + pathArray[0]}`, `${path.sep + pathArray[1]}`, `${path.sep + pathArray[2]}`)
console.log(joinedPath)