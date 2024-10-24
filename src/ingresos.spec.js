import Ingresos from "./Ingresos";

describe("Registrar ingreso", () => {

    const ingresos = new Ingresos();
    const ingreso1 = 200;
    const ingreso2 = 400;

    ingresos.registrarIngreso(ingreso1);
    ingresos.registrarIngreso(ingreso2);
    
    let ingresoRegistrado = ingresos.obtenerIngresos()[0];
    
    it("Debería registrar un ingreso", () => {
        expect(ingresoRegistrado).toEqual(ingreso1);
    });

    
    let ingresosRegistrados = ingresos.obtenerIngresos();

    it("Debería registrar dos ingresos", () => {
        expect(ingresosRegistrados).toEqual([ingreso1, ingreso2]);
    });
});
