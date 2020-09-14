// This example shows how easy it is to create a simple webserver
// using node.js
// To run the code, open a terminal and CD to the src directory
// at the command line (terminal Prompt) type in:
// node ex-9-nodejs-webserver.js

// Open a browser and browse to the server at the address:
// http://127.0.0.1:3000


const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
res.statusCode = 200
res.setHeader('Content-Type', 'text/plain')
res.end('Hello RWU Comsc230\n')
})
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})
