const http = require("http")

const server = http.createServer(
    function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("Okay, este es un mensaje de prueba")
    res.end()
    })
server.listen(8000)

//se tiene que correr en node
//entrar al localhost:8000 en el navegador