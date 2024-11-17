
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
    eliminarGasto(index){
        if (index >= 0 && index < this.gastos.length) {
            this.gastos.splice(index, 1);
        }
    }

}

export default Gastos;
