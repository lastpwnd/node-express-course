const { createReadStream } = require("fs")

let counter = 0

const stream1 = createReadStream("../content/big.txt", {
    highWaterMark: 20000, 
    encoding: "utf8"
})

stream1.on("data", (result) => {
    counter++
})

stream1.on("end", () => {
    console.log(`The stream was fully processed, the number of chunks is ${counter}`)
})

stream1.on("error", (error) => {
    console.log("An error has occurred -> ", error)
})