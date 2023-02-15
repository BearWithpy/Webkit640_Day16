var http = require("http")
const url = require("url")
const fs = require("fs")

var port = 3001
var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html; charset=utf8" })
    if (request.url === "/profile") {
        response.write("<h1>프로필 페이지</h1>")
        response.write("<a href='/'>홈으로 이동</a>")
    }
    if (request.url === "/") {
        response.write("<h1>홈페이지</h1>")
        response.write("<a href='/profile'>프로필로 이동</a>")
    }
    response.end()
})

server.listen(port, () => {
    console.log(`Server running at port ${port}...`)
})
