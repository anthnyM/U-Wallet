// presenter.js
import Gastos from "./Gastos";
import Ingresos from "./Ingresos";
import Saldo from "./Saldo";

// Instancias
const gastos = new Gastos();
const ingresos = new Ingresos();
const saldo = new Saldo();

// Elementos del DOM
const elements = {
    gastoForm: document.querySelector("#gasto-form"),
    gastoInput: document.querySelector("#gasto"),
    descripcionGastoInput: document.querySelector("#descripcion-gasto"),
    categoriaGastoInput: document.querySelector("#categoria-gastos"),
    fechaGastoInput: document.querySelector("#fecha-gasto"),
    gastosDiv: document.querySelector("#gastos-div"),
    verCategoriaGastoInput: document.querySelector("#ver-categoria-gastos"),

    ingresoForm: document.querySelector("#ingreso-form"),
    ingresoInput: document.querySelector("#ingreso"),
    descripcionIngresoInput: document.querySelector("#descripcion-ingreso"),
    categoriaIngresoInput: document.querySelector("#categoria-ingresos"),
    fechaIngresoInput: document.querySelector("#fecha-ingreso"),
    ingresosDiv: document.querySelector("#ingresos-div"),
    verCategoriaIngresoInput: document.querySelector("#ver-categoria-ingresos"),

    saldoDiv: document.querySelector("#saldo-actual"),
};

// Inicializar Eventos
document.getElementById("login-form").addEventListener("submit", manejarLogin);
elements.verCategoriaGastoInput.addEventListener("change", mostrarGastos);
elements.verCategoriaIngresoInput.addEventListener("change", mostrarIngresos);
elements.gastoForm.addEventListener("submit", registrarGasto);
elements.ingresoForm.addEventListener("submit", registrarIngreso);

// Funciones de Login
function manejarLogin(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (esCredencialesValidas(username, password)) {
        ocultarElemento("login-div");
        mostrarElemento("main");
    } else {
        mostrarElemento("login-error");
    }
}

function esCredencialesValidas(username, password) {
    return username === "admin" && password === "password";
}

// Funciones Utilitarias
function ocultarElemento(elementId) {
    document.getElementById(elementId).style.display = "none";
}

function mostrarElemento(elementId) {
    document.getElementById(elementId).style.display = "block";
}

// Funciones de Gastos
function registrarGasto(event) {
    event.preventDefault();
    const nuevoGasto = obtenerDatosGasto();

    gastos.registrarGasto(
    nuevoGasto.valor,
    nuevoGasto.descripcion,
    nuevoGasto.fecha,
    nuevoGasto.categoria
);

    limpiarFormularioGasto();
    mostrarGastos();
    actualizarSaldo(-nuevoGasto.valor);
}

function obtenerDatosGasto() {
    return {
    valor: Number.parseInt(elements.gastoInput.value),
    descripcion: elements.descripcionGastoInput.value,
    categoria: elements.categoriaGastoInput.value || "--",
    fecha: elements.fechaGastoInput.value || "sin fecha",
    };
}

function limpiarFormularioGasto() {
    elements.gastoInput.value = "";
    elements.descripcionGastoInput.value = "";
    elements.fechaGastoInput.value = "";
    elements.categoriaGastoInput.value = "";
}

function mostrarGastos() {
    const categoriaSeleccionada = elements.verCategoriaGastoInput.value;
    const gastosFiltrados = filtrarGastosPorCategoria(categoriaSeleccionada);

    elements.gastosDiv.innerHTML = "<ul>";
    gastosFiltrados.forEach((gasto) => {
    elements.gastosDiv.innerHTML += crearElementoGastoHTML(gasto);
    });
    elements.gastosDiv.innerHTML += "</ul>";

    configurarBotonesGasto();
}

function filtrarGastosPorCategoria(categoria) {
    return gastos
    .obtenerGastos()
    .map((gasto, indexOriginal) => ({ ...gasto, indexOriginal }))
    .filter((gasto) => categoria === "Todos" || gasto.categoria === categoria);
}

function crearElementoGastoHTML(gasto) {
    return `
    <li>
        - Bs: ${gasto.valor} (${gasto.descripcion}) (${gasto.categoria}) (${gasto.fecha})
        <button class="editar-gasto-btn" data-index="${gasto.indexOriginal}">Editar</button>
        <button class="eliminar-gasto-btn" data-index="${gasto.indexOriginal}">Eliminar</button>
    </li>`;
}

function configurarBotonesGasto() {
    document.querySelectorAll(".editar-gasto-btn").forEach((button) => {
    button.addEventListener("click", (event) => editarGasto(event.target.getAttribute("data-index")));
    });

    document.querySelectorAll(".eliminar-gasto-btn").forEach((button) => {
    button.addEventListener("click", (event) => eliminarGasto(event.target.getAttribute("data-index")));
    });
}

function editarGasto(index) {
    const gasto = gastos.obtenerGastos()[index];
    elements.gastoInput.value = gasto.valor;
    elements.descripcionGastoInput.value = gasto.descripcion;
    elements.fechaGastoInput.value = gasto.fecha === "sin fecha" ? "" : gasto.fecha;

    gastos.eliminarGasto(index);
    actualizarSaldo(gasto.valor);
    mostrarGastos();
}

function eliminarGasto(index) {
    const gastoEliminado = gastos.obtenerGastos()[index];
    gastos.eliminarGasto(index);
    actualizarSaldo(gastoEliminado.valor);
    mostrarGastos();
}

// Funciones de Ingresos
function registrarIngreso(event) {
    event.preventDefault();
    const nuevoIngreso = obtenerDatosIngreso();

    ingresos.registrarIngreso(
    nuevoIngreso.valor,
    nuevoIngreso.descripcion,
    nuevoIngreso.fecha,
    nuevoIngreso.categoria
    );

    limpiarFormularioIngreso();
    mostrarIngresos();
    actualizarSaldo(nuevoIngreso.valor);
}

function obtenerDatosIngreso() {
    return {
    valor: Number.parseInt(elements.ingresoInput.value),
    descripcion: elements.descripcionIngresoInput.value,
    categoria: elements.categoriaIngresoInput.value || "--",
    fecha: elements.fechaIngresoInput.value || "sin fecha",
    };
}

function limpiarFormularioIngreso() {
    elements.ingresoInput.value = "";
    elements.descripcionIngresoInput.value = "";
    elements.fechaIngresoInput.value = "";
    elements.categoriaIngresoInput.value = "";
}

function mostrarIngresos() {
    const categoriaSeleccionada = elements.verCategoriaIngresoInput.value;
    const ingresosFiltrados = filtrarIngresosPorCategoria(categoriaSeleccionada);

    elements.ingresosDiv.innerHTML = "<ul>";
    ingresosFiltrados.forEach((ingreso) => {
    elements.ingresosDiv.innerHTML += crearElementoIngresoHTML(ingreso);
    });
    elements.ingresosDiv.innerHTML += "</ul>";

    configurarBotonesIngreso();
}

function filtrarIngresosPorCategoria(categoria) {
    return ingresos
    .obtenerIngresos()
    .map((ingreso, indexOriginal) => ({ ...ingreso, indexOriginal }))
    .filter((ingreso) => categoria === "Todos" || ingreso.categoria === categoria);
}

function crearElementoIngresoHTML(ingreso) {
    return `
    <li>
        - Bs: ${ingreso.valor} (${ingreso.descripcion}) (${ingreso.categoria}) (${ingreso.fecha})
        <button class="editar-ingreso-btn" data-index="${ingreso.indexOriginal}">Editar</button>
        <button class="eliminar-ingreso-btn" data-index="${ingreso.indexOriginal}">Eliminar</button>
    </li>`;
}

function configurarBotonesIngreso() {
    document.querySelectorAll(".editar-ingreso-btn").forEach((button) => {
    button.addEventListener("click", (event) => editarIngreso(event.target.getAttribute("data-index")));
    });

    document.querySelectorAll(".eliminar-ingreso-btn").forEach((button) => {
    button.addEventListener("click", (event) => eliminarIngreso(event.target.getAttribute("data-index")));
    });
}

function editarIngreso(index) {
    const ingreso = ingresos.obtenerIngresos()[index];
    elements.ingresoInput.value = ingreso.valor;
    elements.descripcionIngresoInput.value = ingreso.descripcion;
    elements.fechaIngresoInput.value = ingreso.fecha === "sin fecha" ? "" : ingreso.fecha;

    ingresos.eliminarIngreso(index);
    actualizarSaldo(-ingreso.valor);
    mostrarIngresos();
}

function eliminarIngreso(index) {
    const ingresoEliminado = ingresos.obtenerIngresos()[index];
    ingresos.eliminarIngreso(index);
    actualizarSaldo(-ingresoEliminado.valor);
    mostrarIngresos();
}

// Función de Saldo
function actualizarSaldo(cambio) {
    saldo.actualizarSaldo(cambio);
    elements.saldoDiv.innerText = saldo.obtenerSaldo();
}
