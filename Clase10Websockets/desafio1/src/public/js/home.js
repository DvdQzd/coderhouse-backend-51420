const socket = io();

// Conexión del socket

//Primera parte: enviar caracter por caracter.
// const input = document.getElementById('textbox');
// const log = document.getElementById('log')
// input.addEventListener('keyup',evt=>{
//     let {key} = evt;
//     evt.target.value='';
//     socket.emit('message1',key)
// })

// Este bloque de código se encarga de enviar los caracteres uno por uno al servidor cada vez que se presiona una tecla. 

// Estas líneas obtienen la referencia a los elementos del DOM. 
const input = document.getElementById('textbox');
const log = document.getElementById('log');

// El evento 'keyup' se dispara cada vez que se suelta una tecla en el input.
input.addEventListener('keyup', evt => {
    // Se obtiene la tecla que se presionó.
    let { key } = evt;

    // Se limpia el valor del input.
    evt.target.value = '';

    // Se envía el carácter al servidor mediante el evento 'message1'.
    socket.emit('message1', key);
});

// Este bloque de código se encarga de recibir y mostrar los mensajes enviados por el servidor.

// Se escucha el evento 'log' enviado por el servidor.
socket.on('log', data => {
    // Se concatenan los mensajes recibidos en una variable.
    let logs = '';
    data.logs.forEach(log => {
        // Se construye el mensaje a mostrar en el formato "socketid dice: mensaje".
        logs += `${log.socketid} dice: ${log.message}<br/>`;
    });

    // Se actualiza el contenido del elemento con id 'log' en el DOM.
    log.innerHTML = logs;
});