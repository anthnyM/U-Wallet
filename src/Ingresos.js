// Ingresos.js
class Ingresos {
    constructor() {
        this.ingresos = [];
    }

    registrarIngreso(valor, descripcion) {
        const ingreso = { valor, descripcion }; 
        this.ingresos.push(ingreso);
    }

    obtenerIngresos() {
        return this.ingresos; 
    }
}

export default Ingresos;
