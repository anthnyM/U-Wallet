import Gastos from "./Gastos";

const gasto = document.querySelector("#gasto");
const gastoForm = document.querySelector("#gasto-form");
const gastosDiv = document.querySelector("#gastos-div");

const gastos = new Gastos()

gastoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const gastoValue = Number.parseInt(gasto.value);
  gasto.value = ""

  gastos.registrarGasto(gastoValue)
  const gastosRegistrados = gastos.obtenerGastos()

  gastosDiv.innerHTML = "<ul>"
  gastosRegistrados.forEach((gastoRegistrado) => {
    gastosDiv.innerHTML += "<li>" + gastoRegistrado + "</li>"
  })
  gastosDiv.innerHTML += "</ul>"

});
