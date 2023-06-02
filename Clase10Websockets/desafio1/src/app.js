import express from 'express';
import { Server } from 'socket.io';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';

// Crear una instancia de la aplicación Express
const app = express();

// Configuración para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(__dirname + '/public'));

// Configuración del motor de plantillas Handlebars para las vistas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Utilizar el enrutador de vistas definido en './routes/views.router.js'
app.use('/', viewsRouter);

// Iniciar el servidor HTTP y escuchar en el puerto 8080
const server = app.listen(8080, () => console.log("Listening"));

// Crear una instancia del servidor de Socket.IO y vincularlo al servidor HTTP
const io = new Server(server);

// Array para almacenar los registros de logs
const logs = [];

// Manejar la conexión de un cliente Socket.IO
io.on('connection', socket => {
    console.log("Connected");

    // Enviar los registros existentes al cliente recién conectado
    socket.emit('log', { logs });

    // Manejar el evento 'message1' utilizado en la primera fase del ejercicio
    socket.on("message1", data => {
        // Emitir el mensaje a todos los clientes conectados, incluido el emisor original
        io.emit('log', data);
    });

    // Manejar el evento 'message2' utilizado en la parte de almacenar y devolver los logs completos
    socket.on("message2", data => {
        // Agregar el nuevo log al array 'logs'
        logs.push({
            socketid: socket.id,
            message: data
        });

        // Emitir los registros actualizados a todos los clientes conectados
        io.emit('log', { logs });
    });
});