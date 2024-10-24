import Ingresos from "./Ingresos";

describe("Registrar ingreso", () => {
    const ingresos = new Ingresos();
    const ingreso1 = { valor: 200, descripcion: "Salario" };
    const ingreso2 = { valor: 150, descripcion: "Venta" };

    beforeEach(() => {
        ingresos.ingresos = [];
    });

    it("Debería registrar un ingreso", () => {
        ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion);
        const ingresoRegistrado = ingresos.obtenerIngresos()[0];
        expect(ingresoRegistrado).toEqual(ingreso1);
    });

    it("Debería registrar dos ingresos", () => {
        ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion);
        ingresos.registrarIngreso(ingreso2.valor, ingreso2.descripcion);
        const ingresosRegistrados = ingresos.obtenerIngresos();
        expect(ingresosRegistrados).toEqual([ingreso1, ingreso2]);
    });
});
