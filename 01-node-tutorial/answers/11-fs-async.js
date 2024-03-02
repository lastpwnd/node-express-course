const { readFile, writeFile } = require('fs')

readFile("../content/first.txt", (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result
        readFile("../content/second.txt", (err, result) => {
            if (err) {
                console.log(err)
            }
        const second = result
            readFile("../content/third.txt", (err, result) => {
                if (err) {
                    console.log(err)
                }
            const third = result
                writeFile("./temporary/fileB.txt", first + "\n" + second + "\n" + third, (err, result) => {
                    if (err) {
                        console.log(err)
                    }
                    console.log("Successfully executed")
                    }
                )
        })
    })
})


