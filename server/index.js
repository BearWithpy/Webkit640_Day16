var http = require("http")
const url = require("url")
const fs = require("fs")

var port = 3001
var server = http.createServer()

server.listen(port, () => {
    console.log(`Server running at port ${port}...`)
})

server.on("request", (req, res) => {
    // "https://gateway.ipfscdn.io/ipfs/QmYJuWDW6HSC2ArU3xNQMPe8mBXgGWFDYqYAzsSjoZQF29/junsu_sig001.png"
    if (req.url === "/bear") {
        let filename = "./public/images/junsu_sig001.png"
        fs.readFile(filename, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(200, { "Content-type": "image/png" })
                res.write(data)
                res.end()
            }
        })
    }
    if (req.url === "/") {
        let data = fs.readFileSync("./package.json", "utf8")
        res.end(data)
    }
})
