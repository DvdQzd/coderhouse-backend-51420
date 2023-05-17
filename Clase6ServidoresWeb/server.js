const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Mi primer hola mundo en el curso de backend')
})

const PORT = 8000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

