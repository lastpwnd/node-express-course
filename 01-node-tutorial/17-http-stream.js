var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    //technically, req - readable stream, res - writable one
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8') //creating readable stream
    fileStream.on('open', () => {
      fileStream.pipe(res) //sending all the data to the attached 'writable' destination (res)
    })
    fileStream.on('error', (err) => {
      res.end(err) //closing the stream, displaying the error code
    })
  })
  .listen(5000) //port number
