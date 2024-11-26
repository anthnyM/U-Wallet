
class Gastos {
    constructor() {
        this.gastos = []; 
    }

    registrarGasto(valor, descripcion, fecha= null, categoria = null) {
        const gasto = { valor, descripcion, fecha, categoria};
        this.gastos.push(gasto); 
    }

    obtenerGastos() {
        return this.gastos; 
    }
    eliminarGasto(index){
        if (index >= 0 && index < this.gastos.length) {
            this.gastos.splice(index, 1);
            return 1
        }
        return 0
    }

}

export default Gastos;
