const valor = "";

const resultado = valor ?? "valor por defecto";

console.log({ resultado })

class Ejemplo {
    propiedad1 = "papaya";
    #propiedad2 = "banana";

    get mostrarPropiedad2() {
        this.#metodoPrivado();
        return this.#propiedad2;
    }

    #metodoPrivado = () => {
        console.log("metodo privado funcionando")
    }

}

const ejemplo = new Ejemplo();

console.log(ejemplo.propiedad1);
console.log(ejemplo.propiedad2);
console.log(ejemplo.mostrarPropiedad2);
// console.log(ejemplo.metodoPrivado());
