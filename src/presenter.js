import Gastos from "./Gastos";
import Ingresos from "./Ingresos";

const gasto = document.querySelector("#gasto");
const descripcionGasto = document.querySelector("#descripcion-gasto");
const gastoForm = document.querySelector("#gasto-form");
const gastosDiv = document.querySelector("#gastos-div");

const ingreso = document.querySelector("#ingreso");
const descripcionIngreso = document.querySelector("#descripcion-ingreso");
const ingresoForm = document.querySelector("#ingreso-form");
const ingresosDiv = document.querySelector("#ingresos-div");

const gastos = new Gastos();
const ingresos = new Ingresos();

function actualizarHistorialGastos() {
  const gastosRegistrados = gastos.obtenerGastos();
  gastosDiv.innerHTML = "<ul>";
  gastosRegistrados.forEach((gastoRegistrado) => {
    gastosDiv.innerHTML += `<li>- Bs: ${gastoRegistrado.valor} | ${gastoRegistrado.descripcion}</li>`;
  });
  gastosDiv.innerHTML += "</ul>";
}

function actualizarHistorialIngresos() {
  const ingresosRegistrados = ingresos.obtenerIngresos();
  ingresosDiv.innerHTML = "<ul>";
  ingresosRegistrados.forEach((ingresoRegistrado) => {
    ingresosDiv.innerHTML += `<li>- Bs: ${ingresoRegistrado.valor} | ${ingresoRegistrado.descripcion}</li>`;
  });
  ingresosDiv.innerHTML += "</ul>";
}

gastoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const gastoValue = Number.parseInt(gasto.value);
  const descripcionValue = descripcionGasto.value;

  gasto.value = "";
  descripcionGasto.value = "";

  gastos.registrarGasto(gastoValue, descripcionValue);
  actualizarHistorialGastos();
});

ingresoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingresoValue = Number.parseInt(ingreso.value);
  const descripcionValue = descripcionIngreso.value;

  ingreso.value = "";
  descripcionIngreso.value = "";

  ingresos.registrarIngreso(ingresoValue, descripcionValue);
  actualizarHistorialIngresos();
});
