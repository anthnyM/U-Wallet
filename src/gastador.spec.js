import Gastos from "./Gastos";

describe("Registrar gasto", () => {

    const gastos = new Gastos()
    const gasto = 50

    gastos.registrarGasto(gasto)
    let gastoRegistrado = gastos.obtenerGastos()[0]
    
    it("Debería registrar un gasto", () => {
      expect(gastoRegistrado).toEqual(gasto);
    });
  });