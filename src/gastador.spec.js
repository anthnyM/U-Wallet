import Gastos from "./Gastos";

describe("Gastos", () => {
    let gastos;

    beforeEach(() => {
        gastos = new Gastos();
    });

    test("Debería registrar un gasto con su descripción", () => {
        const valor = 50;
        const descripcion = "Compra de comida";

        gastos.registrarGasto(valor, descripcion);
        const gastosRegistrados = gastos.obtenerGastos();

        expect(gastosRegistrados.length).toBe(1);
        expect(gastosRegistrados[0]).toEqual({ valor, descripcion });
    });

    test("Debería registrar múltiples gastos con sus descripciones", () => {
        const gasto1 = { valor: 50, descripcion: "Compra de comida" };
        const gasto2 = { valor: 100, descripcion: "Transporte" };

        gastos.registrarGasto(gasto1.valor, gasto1.descripcion);
        gastos.registrarGasto(gasto2.valor, gasto2.descripcion);

        const gastosRegistrados = gastos.obtenerGastos();

        expect(gastosRegistrados.length).toBe(2);
        expect(gastosRegistrados).toEqual([gasto1, gasto2]);
    });
});
