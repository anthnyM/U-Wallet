import Ingresos from "./Ingresos";

describe("Registrar ingreso", () => {
    const ingresos = new Ingresos();
    const ingreso1 = { valor: 200, descripcion: "Salario",fecha: null };
    const ingreso2 = { valor: 150, descripcion: "Venta",fecha: null};

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

describe("Eliminar ingreso", () => {
    const ingresos = new Ingresos();
    const ingreso1 = { valor: 200, descripcion: "Salario",fecha: null };
    const ingreso2 = { valor: 150, descripcion: "Venta", fecha: null};

    it("Deberia eliminar el ingreso registrado", ()=>{
        ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion);
        ingresos.registrarIngreso(ingreso2.valor, ingreso2.descripcion);
        ingresos.eliminarIngreso(0);
        const ingresosRegistrados = ingresos.obtenerIngresos();
        expect(ingresosRegistrados).toEqual([ingreso2]);
    });
});
describe("Registrar ingreso con fecha", () => {
    const ingresos = new Ingresos();
    const ingresoConFecha = { valor: 200, descripcion: "Salario", fecha: "2024-11-16" };
    const ingresoSinFecha = { valor: 100, descripcion: "Venta", fecha: null };

    beforeEach(() => {
        ingresos.ingresos = [];
    });

    it("Debería registrar un ingreso con una fecha específica", () => {
        ingresos.registrarIngreso(ingresoConFecha.valor, ingresoConFecha.descripcion, ingresoConFecha.fecha);
        const ingresoRegistrado1 = ingresos.obtenerIngresos()[0];
        expect(ingresoRegistrado1).toEqual(ingresoConFecha);
    });

    it("Debería registrar un ingreso sin fecha ya que no se especifico", () => {
        ingresos.registrarIngreso(ingresoSinFecha.valor, ingresoSinFecha.descripcion);
        const ingresoRegistrado2 = ingresos.obtenerIngresos()[0];
        expect(ingresoRegistrado2).toEqual(ingresoSinFecha);
    });
});