import Ingresos from "./Ingresos";

describe("Gestión de ingresos", () => {
    let ingresos;

    const crearIngreso = (valor, descripcion, fecha = null, categoria = null) => ({
        valor, descripcion, fecha, categoria
    });

    const ingreso1 = crearIngreso(200, "Salario");
    const ingreso2 = crearIngreso(150, "Venta");
    const ingresoConFecha = crearIngreso(200, "Salario", "2024-11-16");
    const ingresoSinFecha = crearIngreso(100, "Venta");
    const ingresoConCategoria = crearIngreso(200, "Salario", "2024-11-16", "Salario");
    const ingresoSinCategoria = crearIngreso(100, "Salario", "2024-11-16");

    beforeEach(() => {
        ingresos = new Ingresos();
        ingresos.ingresos = [];
    });

    describe("Registrar ingreso", () => {
        it("Debería registrar un ingreso", () => {
            ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion, ingreso1.fecha, ingreso1.categoria);
            expect(ingresos.obtenerIngresos()[0]).toEqual(ingreso1);
        });

        it("Debería registrar dos ingresos", () => {
            ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion, ingreso1.fecha, ingreso1.categoria);
            ingresos.registrarIngreso(ingreso2.valor, ingreso2.descripcion, ingreso2.fecha, ingreso2.categoria);
            expect(ingresos.obtenerIngresos()).toEqual([ingreso1, ingreso2]);
        });
    });

    describe("Eliminar ingreso", () => {
        it("Debería eliminar el ingreso registrado", () => {
            ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion);
            ingresos.registrarIngreso(ingreso2.valor, ingreso2.descripcion);
            ingresos.eliminarIngreso(0);
            expect(ingresos.obtenerIngresos()).toEqual([ingreso2]);
        });
        it("Debería retornar 0 si el indice del ingreso a eliminar no existe", () => {
            ingresos.registrarIngreso(ingreso1.valor, ingreso1.descripcion);
            ingresos.registrarIngreso(ingreso2.valor, ingreso2.descripcion);
            ingresos.eliminarIngreso(100);
            expect(ingresos.eliminarIngreso(100)).toEqual(0)
        })
    });

    describe("Registrar ingreso con fecha", () => {
        it("Debería registrar un ingreso con una fecha específica", () => {
            ingresos.registrarIngreso(ingresoConFecha.valor, ingresoConFecha.descripcion, ingresoConFecha.fecha, ingresoConFecha.categoria);
            expect(ingresos.obtenerIngresos()[0]).toEqual(ingresoConFecha);
        });

        it("Debería registrar un ingreso sin fecha ya que no se especificó", () => {
            ingresos.registrarIngreso(ingresoSinFecha.valor, ingresoSinFecha.descripcion);
            expect(ingresos.obtenerIngresos()[0]).toEqual(ingresoSinFecha);
        });
    });

    describe("Registrar ingreso con categoría", () => {
        it("Debería registrar un ingreso con una categoría específica", () => {
            ingresos.registrarIngreso(ingresoConCategoria.valor, ingresoConCategoria.descripcion, ingresoConCategoria.fecha, ingresoConCategoria.categoria);
            expect(ingresos.obtenerIngresos()[0]).toEqual(ingresoConCategoria);
        });

        it("Debería registrar un ingreso sin categoría ya que no se especificó", () => {
            ingresos.registrarIngreso(ingresoSinCategoria.valor, ingresoSinCategoria.descripcion, ingresoSinCategoria.fecha);
            expect(ingresos.obtenerIngresos()[0]).toEqual(ingresoSinCategoria);
        });
    });
});
