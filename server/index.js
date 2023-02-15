var http = require("http")
const url = require("url")
const fs = require("fs")

var port = 3001
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf8" })
    response.end("Hello node.js!!")
})

server.listen(port, () => {
    console.log(`Server running at port ${port}...`)
})
