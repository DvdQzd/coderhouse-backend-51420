

class Animal {

    #especie;

    constructor(mamifero, genero, especie, domesticable, cantidadPatas){
        this.mamifero = mamifero;
        this.genero = genero;
        this.#especie = especie;
        this.domesticable = domesticable;
        this._cantidadPatas = cantidadPatas;
    }

    comer(){
        console.log('estoy comiendo');
    }

    desplazarse(){
        console.log('me estoy desplazando')
    }

    comunicarse(){
        console.log('me estoy comunicando');
    }

    get especie(){
        return this.#especie;
    }

    set especie(especie){
        this.#especie = especie;
    }

    #ciertaFuncionPrivada(){
        console.log('hola soy una funcion privada');
    }

    funcionPublica(){
        console.log('hola soy una funcion publica');
        this.#ciertaFuncionPrivada();
    }

    // get cantidadPatas() {
    //     return this._cantidadPatas; // debes retornar la propiedad
    // }

    // set cantidadPatas(cantidad){
    //     this._cantidadPatas = cantidad; // debes asignar a la propiedad con guion bajo
    // }

    instancia(){
        return this;
    }
}

const perro = new Animal(true, 'M', 'canino', true, 4); // asignamos cantidad de patas

// perro.comunicarse();
// console.log(perro.cantidadPatas); // imprime la cantidad de patas
console.log(perro._cantidadPatas)
console.log(perro.especie); // imprime la especie


perro.funcionPublica(); // no se puede acceder a la funcion privada

console.log(perro.instancia());