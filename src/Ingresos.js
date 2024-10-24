class Ingresos {
    constructor() {
        this.ingresos = [];
    }

    registrarIngreso(ingreso, descripcion) {
        this.ingresos.push({ valor: ingreso, descripcion: descripcion });
    }

    obtenerIngresos() {
        return this.ingresos;
    }
}

export default Ingresos;
