const socket = io();

// Conexión del socket y emisión de un mensaje al servidor.
socket.emit('message', 'Hola, este mensaje viene por websocket!');

// Escucha del evento 'user_connected' enviado por el servidor.
socket.on('user_connected', (data) => {
    console.warn(data);
    // Se muestra en la consola el mensaje recibido.
});

// Escucha del evento 'individual' enviado por el servidor.
socket.on('individual', (data) => {
    console.log(data);
    // Se muestra en la consola el mensaje recibido.
});
