const http = require("http")

const server = http.createServer(
    function(req,res){
    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write("Okay, este es un mensaje de prueba con PORT 9000")
    res.end()
    })
server.listen(9000)

//se tiene que correr en node
//entrar al localhost: para este ejemplo 9000 en el navegador