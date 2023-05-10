// setInterval(() => {
//     console.log('hello')
// }, 1000);

let contador = 0;

const intervalId = setInterval(() => {
    contador++;
    console.log({ contador })
    if(contador > 5) {
        clearInterval(intervalId)
    }
}, 1000);

