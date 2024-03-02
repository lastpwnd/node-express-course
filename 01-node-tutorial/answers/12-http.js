const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Homepage")
    }
    else if (req.url === "/about")
    {
        res.end('"About Us" Page')
    }
    else {
        res.end("Oops, something happened...")
    }
})

server.listen(3000)
console.log("Server is listening on :3000")