// gastos.spec.js
import Gastos from "./Gastos";

describe("Registrar gasto", () => {
    const gastos = new Gastos();
    const gasto1 = { valor: 50, descripcion: "Comida", fecha:null, categoria: null };
    const gasto2 = { valor: 100, descripcion: "Transporte", fecha:null, categoria: null };

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

describe("Eliminar gasto", () => {
    const gastos = new Gastos();
    const gasto1 = { valor: 50, descripcion: "Comida", fecha:null, categoria: null };
    const gasto2 = { valor: 100, descripcion: "Transporte", fecha:null, categoria: null };
    const gasto3 = { valor: 150, descripcion: "Compras", fecha:null, categoria: null };


    it("Deberia eliminar el gasto registrado", ()=>{
        gastos.registrarGasto( gasto1.valor, gasto1.descripcion);
        gastos.registrarGasto( gasto2.valor, gasto2.descripcion);
        gastos.eliminarGasto(0);
        const gastosRegistrados = gastos.obtenerGastos();
        expect(gastosRegistrados).toEqual([gasto2]);
    });


});
describe("Registrar gasto con fecha", () => {
    const gastos = new Gastos();
    const gastoConFecha = { valor: 200, descripcion: "Salario", fecha: "2024-11-16", categoria: null };
    const gastoSinFecha = { valor: 100, descripcion: "Venta", fecha: null, categoria: null };

    beforeEach(() => {
        gastos.gastos = [];
    });

    it("Debería registrar un ingreso con una fecha específica", () => {
        gastos.registrarGasto(gastoConFecha.valor, gastoConFecha.descripcion, gastoConFecha.fecha);
        const gastoRegistrado1 = gastos.obtenerGastos()[0];
        expect(gastoRegistrado1).toEqual(gastoConFecha);
    });

    it("Debería registrar un gasto sin fecha ya que no se especifico", () => {
        gastos.registrarGasto(gastoSinFecha.valor, gastoSinFecha.descripcion);
        const gastoRegistrado2 = gastos.obtenerGastos()[0];
        expect(gastoRegistrado2).toEqual(gastoSinFecha);
    });
});

describe("Registrar gasto con categoria", () => {
    const gastos = new Gastos();
    const gastoConCategoria = { valor: 200, descripcion: "Dinero perdido en el rojo", fecha: "2024-11-16", categoria:"Apuestas" };
    const gastoSinCategoria = { valor: 100, descripcion: "Venta", fecha: "2024-10-16", categoria: null};

    beforeEach(() => {
        gastos.gastos = [];
    });

    it("Debería registrar un ingreso con una categoria específico", () => {
        gastos.registrarGasto(gastoConCategoria.valor, gastoConCategoria.descripcion, gastoConCategoria.fecha, gastoConCategoria.categoria);
        const gastoRegistrado1 = gastos.obtenerGastos()[0];
        expect(gastoRegistrado1).toEqual(gastoConCategoria);
    });

    it("Debería registrar un gasto sin categoria ya que no se especifico", () => {
        gastos.registrarGasto(gastoSinCategoria.valor, gastoSinCategoria.descripcion,gastoSinCategoria.fecha);
        const gastoRegistrado2 = gastos.obtenerGastos()[0];
        expect(gastoRegistrado2).toEqual(gastoSinCategoria);
    });
});

