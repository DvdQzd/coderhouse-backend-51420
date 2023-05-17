const fs = require('fs')

class ProductManager {

    async obtenerDatosDeArchivo() {
        const productos = await fs.promises.readFile('ruta_al_archivo', 'utf8')
        return productos;
    }

}