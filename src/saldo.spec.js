import Saldo from "./Saldo";

describe('Calcular saldo', () => {
    const saldo = new Saldo()
    const ingreso = 57
    const gasto =27

    beforeEach(() =>{
        saldo.saldo = 0
    })

    it('Debería generar el saldo calculado', () => {
        saldo.actualizarSaldo(ingreso)
        const saldoActual = saldo.obtenerSaldo()
        expect(saldoActual).toEqual(ingreso)
    })

    it('Deberia generar el saldo calculado', () =>{
        saldo.actualizarSaldo(ingreso)
        saldo.actualizarSaldo(-gasto)
        const saldoActual = saldo.obtenerSaldo()
        expect(saldoActual).toEqual(ingreso - gasto)
    })
})