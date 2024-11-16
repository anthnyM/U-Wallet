// presenter.js
import Gastos from "./Gastos";
import Ingresos from "./Ingresos";
import Saldo from "./Saldo";

const gastos = new Gastos();
const ingresos = new Ingresos();
const saldo = new Saldo();

const gastoInput = document.querySelector("#gasto");
const descripcionGastoInput = document.querySelector("#descripcion-gasto");
const gastoForm = document.querySelector("#gasto-form");
const gastosDiv = document.querySelector("#gastos-div");
const ingresoInput = document.querySelector("#ingreso");
const descripcionIngresoInput = document.querySelector("#descripcion-ingreso");
const ingresoForm = document.querySelector("#ingreso-form");
const ingresosDiv = document.querySelector("#ingresos-div");

const saldoDiv = document.querySelector("#saldo-actual");

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        document.getElementById('login-div').style.display = 'none'; 
        document.getElementById('main').style.display = 'block'; 
    } else {
        document.getElementById('login-error').style.display = 'block'; 
    }
  });


function mostrarGastos(){
    const gastosRegistrados = gastos.obtenerGastos();
    gastosDiv.innerHTML = "<ul>";
    gastosRegistrados.forEach((gasto) => {
        gastosDiv.innerHTML += `<li>- Bs: ${gasto.valor} (${gasto.descripcion})</li>`;
    });
    gastosDiv.innerHTML += "</ul>";
}


gastoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const gastoValue = Number.parseInt(gastoInput.value);
    const descripcionGastoValue = descripcionGastoInput.value;
    gastos.registrarGasto(gastoValue, descripcionGastoValue);

    gastoInput.value = "";
    descripcionGastoInput.value = "";

    mostrarGastos();
    saldo.actualizarSaldo(-gastoValue);
    saldoDiv.innerText = saldo.obtenerSaldo();
});


function mostrarIngresos(){
    const ingresosRegistrados = ingresos.obtenerIngresos();
    ingresosDiv.innerHTML = "<ul>";
    ingresosRegistrados.forEach((ingreso, index) => {
        ingresosDiv.innerHTML += `
            <li>
                - Bs: ${ingreso.valor} (${ingreso.descripcion})
                <button class="editar-btn" data-index="${index}">Editar</button>
                <button class="eliminar-btn" data-index="${index}">Eliminar</button>
            </li>
        `;
    });
    ingresosDiv.innerHTML += "</ul>";

    const editarButtons = document.querySelectorAll(".editar-btn");
    editarButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            editarIngreso(index);
        });
    });

    const eliminarButtons = document.querySelectorAll(".eliminar-btn");
    eliminarButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            saldo.actualizarSaldo(-ingresos.obtenerIngresos()[index].valor);
            ingresos.eliminarIngreso(index);
            saldoDiv.innerText = saldo.obtenerSaldo();
            mostrarIngresos();
        });
    });
}

function editarIngreso(index) {
    const ingreso = ingresos.obtenerIngresos()[index];

    ingresoInput.value = ingreso.valor;
    descripcionIngresoInput.value = ingreso.descripcion;

    ingresos.eliminarIngreso(index);
    saldo.actualizarSaldo(-ingreso.valor);
}



ingresoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const ingresoValue = Number.parseInt(ingresoInput.value);
    const descripcionIngresoValue = descripcionIngresoInput.value;
    ingresos.registrarIngreso(ingresoValue, descripcionIngresoValue);

    ingresoInput.value = "";
    descripcionIngresoInput.value = "";

    mostrarIngresos();
    saldo.actualizarSaldo(ingresoValue);
    saldoDiv.innerText = saldo.obtenerSaldo();
});
