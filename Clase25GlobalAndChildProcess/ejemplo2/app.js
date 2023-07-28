console.log('Funcionando!')

process.on('exit', (code) => {
    console.log('El proceso terminó con codigo', code);
    if(code === -4){
        console.log('Proceso finalizado por argumentación inválida en una función');
    }
})

const listNumbers = (...numbers) => {
    const types = numbers.map(n => typeof n);
    if(!types.every(t => t === 'number')){
        process.exit(-4)
    }
}

listNumbers(12, 2, 'caballo', false);

// console();

process.on('uncaughtException', err => {
    console.error('Se nos ha olvidado capturar un error');
    console.error(err.message);
})

// let a = 0;
// while( a < 10 ){
//     console.log(a);
//     a++;
//     if(a == 3){
//         process.exit(-28896787897);
//     }
// }

