const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0) reject({ errorMsg: 'no se puede dividir por cero', statusCode: 422 })

        resolve(dividendo / divisor)
    });
}

dividir(10, 2)
        .then(resultado => {
            console.log('nos fue bien!')
            console.log(resultado)
        })
        .then(resultado => {
            console.log('estoy feliz porque me fue bien')
        })
        .catch(error => {
            console.log('nos fue mal!')
            console.error({error})
        })
        .finally(
            console.log('operacion finalizada')
        );