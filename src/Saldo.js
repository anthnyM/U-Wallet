class Saldo{
    constructor(){
        this.saldo = 0
    }

    actualizarSaldo(monto){
        this.saldo += monto
    }

    obtenerSaldo(){
        return this.saldo
    }
}

export default Saldo