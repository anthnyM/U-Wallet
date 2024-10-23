import Gastos from "./Gastos";

const gasto = document.querySelector("#gasto");
const gastoForm = document.querySelector("#gasto-form");
const gastosDiv = document.querySelector("#gastos-div");

const gastos = new Gastos()

gastoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const gastoValue = Number.parseInt(gasto.value);

  gastos.registrarGasto(gastoValue)
  const gastoRegistrado = gastos.obtenerGastos()[0]

  gastosDiv.innerHTML = "<p>" + gastoRegistrado + "</p>";

});
