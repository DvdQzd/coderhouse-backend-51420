import express from 'express';
import compression from 'express-compression';

const app = express();

// app.use(compression())
app.use(compression({
    brotli: {enabled: true, zlib: {}}
}))

app.get('/stringlarga', (req, res) => {
    let string = 'Hola soy un string'
    
    const response = string.repeat(100000)

    res.send(response)
})

app.listen(8080, () => console.log('server ok'));