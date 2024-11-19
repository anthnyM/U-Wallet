// Ingresos.js
class Ingresos {
    constructor() {
        this.ingresos = [];
    }

    registrarIngreso(valor, descripcion, fecha = null, categoria = null) {
        const ingreso = { valor, descripcion, fecha, categoria };
        this.ingresos.push(ingreso);
    }

    obtenerIngresos() {
        return this.ingresos; 
    }

    eliminarIngreso(index){
        if (index >= 0 && index < this.ingresos.length) {
            this.ingresos.splice(index, 1);
            return 1
        }
        return 0
    }
}

export default Ingresos;
