
class Gastos {
    constructor() {
        this.gastos = []; 
    }

    registrarGasto(valor, descripcion, fecha= null) {
        const gasto = { valor, descripcion, fecha};
        this.gastos.push(gasto); 
    }

    obtenerGastos() {
        return this.gastos; 
    }
}

export default Gastos;
