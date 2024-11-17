// presenter.js
import Gastos from "./Gastos";
import Ingresos from "./Ingresos";
import Saldo from "./Saldo";

const gastos = new Gastos();
const ingresos = new Ingresos();
const saldo = new Saldo();

const gastoInput = document.querySelector("#gasto");
const descripcionGastoInput = document.querySelector("#descripcion-gasto");
const fechaGastoInput = document.querySelector("#fecha-gasto");  
const gastoForm = document.querySelector("#gasto-form");
const gastosDiv = document.querySelector("#gastos-div");
const ingresoInput = document.querySelector("#ingreso");
const descripcionIngresoInput = document.querySelector("#descripcion-ingreso");
const fechaIngresoInput = document.querySelector("#fecha-ingreso"); 
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
    gastosRegistrados.forEach((gasto, indexGasto) => {
        gastosDiv.innerHTML += `
            <li>
                - Bs: ${gasto.valor} (${gasto.descripcion}) (${gasto.fecha === "nulo" ? "sin fecha" : gasto.fecha})
                <button class="editar-gasto-btn" data-index="${indexGasto}">Editar</button>
                <button class="eliminar-gasto-btn" data-index="${indexGasto}">Eliminar</button>
          
            </li>`;
    });
    gastosDiv.innerHTML += "</ul>";

    // Agregar eventos a los botones de "Editar"
    const editarButtons = document.querySelectorAll(".editar-gasto-btn");
    editarButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            editarGasto(index);
        });
    });

    // Agregar eventos a los botones de "Eliminar"
    const eliminarButtons = document.querySelectorAll(".eliminar-gasto-btn");
    eliminarButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            saldo.actualizarSaldo(gastos.obtenerGastos()[index].valor);  // Decrementar saldo al eliminar
            gastos.eliminarGasto(index);
            saldoDiv.innerText = saldo.obtenerSaldo();
            mostrarGastos();
        });
    });
    
}


gastoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const gastoValue = Number.parseInt(gastoInput.value);
    const descripcionGastoValue = descripcionGastoInput.value;
    const fechaGastoValue = fechaGastoInput.value || "sin fecha"; 

    gastos.registrarGasto(gastoValue, descripcionGastoValue, fechaGastoValue);

    gastoInput.value = "";
    descripcionGastoInput.value = "";
    fechaGastoInput.value = "";


    mostrarGastos();
    saldo.actualizarSaldo(-gastoValue);
    saldoDiv.innerText = saldo.obtenerSaldo();

});

function editarGasto(index) {
    const gasto = gastos.obtenerGastos()[index];

    gastoInput.value = gasto.valor;
    descripcionGastoInput.value = gasto.descripcion;
    fechaGastoInput.value = gasto.fecha === "sin fecha" ? "" : gasto.fecha;  // Si es "sin fecha", dejamos el campo vacío.

    // Eliminar el gasto de la lista antes de editarlo
    gastos.eliminarGasto(index);
    saldo.actualizarSaldo(gasto.valor);  // Revertir el saldo por el valor anterior
}

//------------------------------------- INGRESOS ---------------------------------------------------------

function mostrarIngresos(){
    const ingresosRegistrados = ingresos.obtenerIngresos();
    ingresosDiv.innerHTML = "<ul>";
    ingresosRegistrados.forEach((ingreso, indexIngreso) => {
        ingresosDiv.innerHTML += `
            <li>
                - Bs: ${ingreso.valor} (${ingreso.descripcion}) (${ingreso.fecha === "nulo" ? "sin fecha" : ingreso.fecha})
                <button class="editar-ingreso-btn" data-index="${indexIngreso}">Editar</button>
                <button class="eliminar-ingreso-btn" data-index="${indexIngreso}">Eliminar</button>
            </li>
        `;
    });
    ingresosDiv.innerHTML += "</ul>";

    const editarButtons = document.querySelectorAll(".editar-ingreso-btn");
    editarButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            editarIngreso(index);
        });
    });

    const eliminarButtons = document.querySelectorAll(".eliminar-ingreso-btn");
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
    const fechaIngresoValue = fechaIngresoInput.value || "sin fecha";  // Si no se ingresa fecha, asignar "nulo".

    ingresos.registrarIngreso(ingresoValue, descripcionIngresoValue, fechaIngresoValue);

    ingresoInput.value = "";
    descripcionIngresoInput.value = "";
    fechaIngresoInput.value = ""; // Limpiar el campo de fecha.

    mostrarIngresos();
    saldo.actualizarSaldo(ingresoValue);
    saldoDiv.innerText = saldo.obtenerSaldo();
});