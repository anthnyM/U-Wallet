import Gastos from "./Gastos";

describe("Registrar gasto", () => {

    const gastos = new Gastos()
    const gasto1 = 50
    const gasto2 = 100

    gastos.registrarGasto(gasto1)
    gastos.registrarGasto(gasto2)
    
    let gastoRegistrado = gastos.obtenerGastos()[0]
    
    it("Debería registrar un gasto", () => {
      expect(gastoRegistrado).toEqual(gasto1);
    });

    
    let gastosRegistrados = gastos.obtenerGastos()

    it("Debería registrar dos gastos", () => {
        expect(gastosRegistrados).toEqual([gasto1,gasto2]);
      });
  });