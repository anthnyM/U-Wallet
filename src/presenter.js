// presenter.js
import Gastos from "./Gastos";
import Ingresos from "./Ingresos";

const gastos = new Gastos();
const ingresos = new Ingresos();

const gastoInput = document.querySelector("#gasto");
const descripcionGastoInput = document.querySelector("#descripcion-gasto");
const gastoForm = document.querySelector("#gasto-form");
const gastosDiv = document.querySelector("#gastos-div");

const ingresoInput = document.querySelector("#ingreso");
const descripcionIngresoInput = document.querySelector("#descripcion-ingreso");
const ingresoForm = document.querySelector("#ingreso-form");
const ingresosDiv = document.querySelector("#ingresos-div");
const saldoDiv = document.querySelector("#saldo-actual");

const actualizarSaldo = () => {
    const totalGastos = gastos.obtenerGastos().reduce((total, gasto) => total + gasto.valor, 0);
    const totalIngresos = ingresos.obtenerIngresos().reduce((total, ingreso) => total + ingreso.valor, 0);
    const saldoActual = totalIngresos - totalGastos;
    saldoDiv.innerText = `Saldo actual: Bs ${saldoActual}`;
};

gastoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const gastoValue = Number.parseInt(gastoInput.value);
    const descripcionGastoValue = descripcionGastoInput.value;
    gastos.registrarGasto(gastoValue, descripcionGastoValue);

    gastoInput.value = "";
    descripcionGastoInput.value = "";

    const gastosRegistrados = gastos.obtenerGastos();
    gastosDiv.innerHTML = "<ul>";
    gastosRegistrados.forEach((gasto) => {
        gastosDiv.innerHTML += `<li>- Bs: ${gasto.valor} (${gasto.descripcion})</li>`;
    });
    gastosDiv.innerHTML += "</ul>";

    actualizarSaldo();
});

ingresoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const ingresoValue = Number.parseInt(ingresoInput.value);
    const descripcionIngresoValue = descripcionIngresoInput.value;
    ingresos.registrarIngreso(ingresoValue, descripcionIngresoValue);

    ingresoInput.value = "";
    descripcionIngresoInput.value = "";

    const ingresosRegistrados = ingresos.obtenerIngresos();
    ingresosDiv.innerHTML = "<ul>";
    ingresosRegistrados.forEach((ingreso) => {
        ingresosDiv.innerHTML += `<li>- Bs: ${ingreso.valor} (${ingreso.descripcion})</li>`;
    });
    ingresosDiv.innerHTML += "</ul>";

    actualizarSaldo();
});
