const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync("../content/first.txt")
const second = readFileSync("../content/second.txt")
const third = readFileSync("../content/third.txt")

writeFileSync("./temporary/fileA.txt", first + "\n" + second + "\n" + third, {flag:"a"})
console.log("Successfully executed")
