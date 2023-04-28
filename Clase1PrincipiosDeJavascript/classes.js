class Bicicleta {
    // propiedades
    color = 'Blanco';
    aro = 29;
    marca = 'oxford';
    otraCosa = [1, 2, 3]
    // metodoComoValor = () => console.log('a ver?')

    constructor(color, aro, marca){
        this.color = color;
        this.aro = aro;
        this.marca = marca;
    }

    avanzar(){
        // aca escribimos como avanzar
        console.log('avanzamos!')
    }

    frenar(){
        //
    }
}

const bicicleta = new Bicicleta('amarillo', 20, 'pepe');

console.log(bicicleta);

bicicleta.avanzar();

const bicicleta2 = new Bicicleta('roja', 22, 'coco');

console.log(bicicleta2);