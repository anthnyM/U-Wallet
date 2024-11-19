describe("U-Wallet", () => {
    beforeEach(() => {
        cy.visit("/");
});

it.skip("Muestra el gasto registrado", () => {
    cy.get("#gasto").type(50);
    cy.get("#descripcion-gasto").type("Comida");
    cy.get("#gasto-form").submit();

    cy.get("#gasto").type(100);
    cy.get("#descripcion-gasto").type("Transporte");
    cy.get("#gasto-form").submit();

    cy.get("#gastos-div").should("contain", "50");
    cy.get("#gastos-div").should("contain", "Comida");
    cy.get("#gastos-div").should("contain", "100");
    cy.get("#gastos-div").should("contain", "Transporte");
});

it.skip("Muestra el ingreso registrado", () => {
    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#ingreso-form").submit();

    cy.get("#ingreso").type(150);
    cy.get("#descripcion-ingreso").type("Venta");
    cy.get("#ingreso-form").submit();

    cy.get("#ingresos-div").should("contain", "200");
    cy.get("#ingresos-div").should("contain", "Salario");
    cy.get("#ingresos-div").should("contain", "150");
    cy.get("#ingresos-div").should("contain", "Venta");
});


});


it.skip("Verificar visibilidad de login", ()=> {
    cy.visit("/");
    cy.get("#login-div").should("be.visible");
    cy.get("#main").should("not.be.visible");
});

it.skip("Verificar contraseña invalida", ()=> {
    cy.visit("/");
    cy.get("#username").type("123");
    cy.get("#password").type("123");
    cy.get("#login-form").submit();
    cy.get("#login-error").should("contain","Credenciales no validas. Intentalo de nuevo.");
});

it.skip("Verificar login valido", ()=> {
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();
    cy.get("#main").should("be.visible");
});

it.skip("Actualiza el saldo al registrar gastos e ingresos", () => {
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();
    cy.get("#main").should("be.visible");

    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#ingreso-form").submit();

    cy.get("#gasto").type(50);
    cy.get("#descripcion-gasto").type("Comida");
    cy.get("#gasto-form").submit();

    cy.get("#saldo-actual").should("contain", "150"); // 200 - 50 = 150
});

it.skip("Permite editar los datos al seleccionar la opcion Editar", () =>{
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();

    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#ingreso-form").submit();

    cy.get(".editar-ingreso-btn").first().click();
    cy.get("#ingreso").should("have.value", "200");
    cy.get("#descripcion-ingreso").should("have.value", "Salario");
});

it.skip("Edita los datos al seleccionar la opcion Editar en ingresos", () =>{
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();

    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#ingreso-form").submit();

    cy.get(".editar-ingreso-btn").first().click();
    cy.get("#ingreso").clear();
    cy.get("#ingreso").type(400);
    cy.get("#descripcion-ingreso").clear();
    cy.get("#descripcion-ingreso").type("Regalo");
    cy.get("#fecha-ingreso").type("2023-03-09");
    cy.get("#ingreso-form").submit();

    cy.get("#ingresos-div").should("contain", "400");
    cy.get("#ingresos-div").should("contain", "Regalo");
    cy.get("#ingresos-div").should("contain", "2023-03-09");

});

it.skip("Edita los datos al seleccionar la opcion Editar en gastos", () =>{
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();

    cy.get("#gasto").type(100);
    cy.get("#descripcion-gasto").type("Almuerzo");
    cy.get("#gasto-form").submit();

    cy.get(".editar-gasto-btn").first().click();
    cy.get("#gasto").clear();
    cy.get("#gasto").type(80);
    cy.get("#descripcion-gasto").clear();
    cy.get("#descripcion-gasto").type("Comida");
    cy.get("#fecha-gasto").type("2021-03-09");
    cy.get("#gasto-form").submit();

    cy.get("#gastos-div").should("contain", "80");
    cy.get("#gastos-div").should("contain", "Comida");
    cy.get("#gastos-div").should("contain", "2021-03-09");

});


it.skip("Elimina un ingreso al seleccionar la opcion Eliminar", () =>{
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();

    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#ingreso-form").submit();

    cy.get(".eliminar-ingreso-btn").first().click();
    cy.get("#ingresos-div").should("contain", "");
});



it.skip("Muestra el ingreso registrado con fecha", () => {
    
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();
    
    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#fecha-ingreso").type("2024-11-11");
    cy.get("#ingreso-form").submit();

    cy.get("#ingreso").type(150);
    cy.get("#descripcion-ingreso").type("Venta");
    cy.get("#ingreso-form").submit();

    cy.get("#ingresos-div").should("contain", "200");
    cy.get("#ingresos-div").should("contain", "Salario");
    cy.get("#ingresos-div").should("contain", "2024-11-11");
    cy.get("#ingresos-div").should("contain", "150");
    cy.get("#ingresos-div").should("contain", "Venta");
    cy.get("#ingresos-div").should("contain", "sin fecha");
});

it.skip("Muestra el gasto registrado con fecha", () => {
    
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();
    
    cy.get("#gasto").type(30);
    cy.get("#descripcion-gasto").type("almuerzo");
    cy.get("#fecha-gasto").type("2014-08-11");
    cy.get("#gasto-form").submit();

    cy.get("#gasto").type(175);
    cy.get("#descripcion-gasto").type("Ropa");
    cy.get("#gasto-form").submit();

    cy.get("#gastos-div").should("contain", "30");
    cy.get("#gastos-div").should("contain", "almuerzo");
    cy.get("#gastos-div").should("contain", "2014-08-11");
    cy.get("#gastos-div").should("contain", "175");
    cy.get("#gastos-div").should("contain", "Ropa");
    cy.get("#gastos-div").should("contain", "sin fecha");
});

it("Permite registrar una categoría al registro de un ingreso", () => {
    
    cy.visit("/");
    cy.get("#username").type("admin");
    cy.get("#password").type("password");
    cy.get("#login-form").submit();
    
    cy.get("#ingreso").type(2000);
    cy.get("#descripcion-ingreso").type("PachaSoft");
    cy.get("#categoria-ingresos").select("Regalos")
    cy.get("#fecha-ingreso").type("2014-08-11");
    cy.get("#ingreso-form").submit();
});