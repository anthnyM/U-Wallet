import Ingresos from "./Ingresos";

describe("Ingresos", () => {
    let ingresos;

    beforeEach(() => {
        ingresos = new Ingresos();
    });

    test("Debería registrar un ingreso con su descripción", () => {
        const valor = 150;
        const descripcion = "Salario";

        ingresos.registrarIngreso(valor, descripcion);
        const ingresosRegistrados = ingresos.obtenerIngresos();

        expect(ingresosRegistrados.length).toBe(1);
        expect(ingresosRegistrados[0]).toEqual({ valor, descripcion });
    });

    test("Debería registrar múltiples ingresos con sus descripciones", () => {
        const ingreso1 = { valor: 150, descripcion: "Salario" };
        const ingreso2 = { valor: 200, descripcion: "Venta de productos" };

        ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion);
        ingresos.registrarIngreso(ingreso2.valor, ingreso2.descripcion);

        const ingresosRegistrados = ingresos.obtenerIngresos();

        expect(ingresosRegistrados.length).toBe(2);
        expect(ingresosRegistrados).toEqual([ingreso1, ingreso2]);
    });
});
