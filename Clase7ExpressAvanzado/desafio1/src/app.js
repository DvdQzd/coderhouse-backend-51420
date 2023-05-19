import express from 'express';

const app = express();

// Permite la lectura de datos JSON
app.use(express.json()) 

app.listen(8080, ()=> {
  console.log("Listening on PORT 8080");
});

// Iniciamos nuestra frase
let frase = "Frase inicial";

// Endpoint GET para retornar la frase completa
app.get('/api/frase', (req, res) => {
    res.send({ frase });
})

// Endpoint GET para retornar una palabra especifica de la frase
app.get('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos;

    // Validar que 'pos' es un número
    if(isNaN(pos)) 
        return res.status(400).send({ status:"error", error:"Pos debe ser un número" });

    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');

    // Validar que 'pos' está dentro del rango de palabras
    if(parsedPos <= 0 || parsedPos > palabras.length) 
        return res.status(400).send({ status:"error", error:"Posición fuera del rango de la frase" });

    res.send({ palabra: palabras[parsedPos-1] });
})

// Endpoint POST para agregar una palabra a la frase
app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra;
    frase = frase + ` ${palabra}`;
    res.send({ palabra, pos: frase.split(' ').length });
})

// Endpoint PUT para actualizar una palabra de la frase
app.put('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos;
    const palabra = req.body.palabra;

    // Validar que 'pos' es un número
    if(isNaN(pos)) 
        return res.status(400).send({ status:"error", error:"Pos debe ser un número" });

    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');

    // Validar que 'pos' está dentro del rango de palabras
    if(parsedPos <= 0 || parsedPos > palabras.length) 
        return res.status(400).send({ status:"error", error:"Posición fuera del rango de la frase" });

    const anterior = palabras[parsedPos-1];
    palabras[parsedPos-1] = palabra;
    frase = palabras.join(' ');

    res.send({ actualizada: palabra, anterior })
})

// Endpoint DELETE para eliminar una palabra de la frase
app.delete('/api/palabras/:pos', (req, res) => {
    const pos = req.params.pos;

    // Validar que 'pos' es un número
    if(isNaN(pos)) 
        return res.status(400).send({ status:"error", error:"Pos debe ser un número" });

    const parsedPos = parseInt(pos);
    const palabras = frase.split(' ');

    // Validar que 'pos' está dentro del rango de palabras
    if(parsedPos <= 0 || parsedPos > palabras.length) 
        return res.status(400).send({ status:"error", error:"Posición fuera del rango de la frase" });

    const palabraEliminada = palabras.splice(parsedPos-1, 1);
    frase = palabras.join(' ');

    res.send({ status:"success", eliminada: palabraEliminada })
})
