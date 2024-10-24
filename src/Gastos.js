
class Gastos {
    constructor() {
        this.gastos = []; 
    }

    registrarGasto(valor, descripcion) {
        const gasto = { valor, descripcion };
        this.gastos.push(gasto); 
    }

    obtenerGastos() {
        return this.gastos; 
    }
}

export default Gastos;
