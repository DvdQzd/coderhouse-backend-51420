const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if(divisor === 0) reject({ errorMsg: 'no se puede dividir por cero', statusCode: 422 })

        resolve(dividendo / divisor)
    });
}

const funcionAsincrona = async () => {
    try {
        const division = await dividir(4, 2);
        console.log(division);
    } catch (error) {
        console.log('hubo un problema', error);
    }
}

funcionAsincrona();