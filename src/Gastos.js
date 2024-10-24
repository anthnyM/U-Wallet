class Gastos {
    constructor() {
        this.gastos = [];
    }

    registrarGasto(gasto, descripcion) {
        this.gastos.push({ valor: gasto, descripcion: descripcion });
    }

    obtenerGastos() {
        return this.gastos;
    }
}

export default Gastos;
