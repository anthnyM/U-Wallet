// gastos.spec.js
import Gastos from "./Gastos";

describe("Registrar gasto", () => {
    const gastos = new Gastos();
    const gasto1 = { valor: 50, descripcion: "Comida" };
    const gasto2 = { valor: 100, descripcion: "Transporte" };

    beforeEach(() => {
        gastos.gastos = [];
    });

    it("Debería registrar un gasto", () => {
        gastos.registrarGasto(gasto1.valor, gasto1.descripcion);
        const gastoRegistrado = gastos.obtenerGastos()[0];
        expect(gastoRegistrado).toEqual(gasto1);
    });

    it("Debería registrar dos gastos", () => {
        gastos.registrarGasto(gasto1.valor, gasto1.descripcion);
        gastos.registrarGasto(gasto2.valor, gasto2.descripcion);
        const gastosRegistrados = gastos.obtenerGastos();
        expect(gastosRegistrados).toEqual([gasto1, gasto2]);
    });
});
