const foo = () => {
    let nombre = 'David';
    const bar = saludo => {
        const texto = 'como estas?';
        return `${saludo}, ${nombre}, ${texto}`
    }
    return bar;
}

console.log(foo()('Hola'))