var http = require("http")
const url = require("url")
const fs = require("fs")

var port = 3001
var server = http.createServer()

server.listen(port, () => {
    console.log(`Server running at port ${port}...`)
})

server.on("request", (req, res) => {
    let data = fs.readFileSync("./package.json", "utf8")
    res.end(data)
})
