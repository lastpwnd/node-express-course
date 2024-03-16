const { writeFile, readFile } = require("fs").promises

let result = ""

writeFile("./temp.txt", "first line \n", {flag: "a"}) 
.then(()=>{
    return writeFile("./temp.txt", "second line \n", {flag: "a"}) 
})
    .then(()=>{
        return writeFile("./temp.txt", "third line \n", {flag: "a"})
    })
        .then(()=>{
              return result = readFile("./temp.txt", "utf8")           
        })
            .then(()=>{
                return console.log(result)
            })
                .catch((error)=>{
                    console.log("Error have occurred ->", error)
                })