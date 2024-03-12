const { writeFile, readFile } = require("fs").promises

let first, second, third

const writer = async () => {
    try {
        await writeFile("./temp.txt", first + "\n" + second + "\n" + third, {flag: "a"})
        console.log ("File have been written successfully")
    } catch (error) {
        console.log("Write to file error have occured -> " + error)        
    }
}

const reader = async () => {
    try {
         first = await readFile("../content/first.txt")
         second = await readFile("../content/second.txt")
         third = await readFile("../content/third.txt")
    } catch (error) {
        console.log("Read from file error have occured -> " + error) 
    }
}


const readAndWrite = async () => {
    await reader()
    await writer()
}

readAndWrite()