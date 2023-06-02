import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io';

// Importación de los módulos necesarios.

const app = express();
const serverHttp = app.listen(8080, () => console.log("Listening"));

const socketServer = new Server(serverHttp);

// Creación de la aplicación Express y el servidor HTTP.

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

// Configuración del motor de plantillas Handlebars.

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración del middleware para el manejo de JSON y URL-encoded.

app.use('/', viewsRouter);

// Configuración del enrutador para las vistas.

socketServer.on('connection', (socket) => {
    console.log('Cliente conectado en el back');

    // Evento que se dispara cuando un cliente se conecta al servidor.

    socket.on('message', (data) => {
        console.log(data);
    });

    // Evento que se dispara cuando se recibe un mensaje del cliente.

    socket.broadcast.emit('user_connected', `User ${socket.id} has connected.`);

    // Emite un mensaje a todos los clientes excepto al que se acaba de conectar.

    socket.emit('individual', 'Bienvenido!');

    // Envía un mensaje individual al cliente que se acaba de conectar.
});
