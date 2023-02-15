var http = require("http")

var port = 3001
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" })
    response.end("Hello node.js!!")
})

server.listen(port, () => {
    console.log(`Server running at port ${port}...`)
})
