describe("U-Wallet", () => {
    beforeEach(() => {
        cy.visit("/");
});

it("Muestra el gasto registrado", () => {
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

it("Muestra el ingreso registrado", () => {
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

it("Actualiza el saldo al registrar gastos e ingresos", () => {
    cy.get("#ingreso").type(200);
    cy.get("#descripcion-ingreso").type("Salario");
    cy.get("#ingreso-form").submit();

    cy.get("#gasto").type(50);
    cy.get("#descripcion-gasto").type("Comida");
    cy.get("#gasto-form").submit();

      cy.get("#saldo-actual").should("contain", "150"); // 200 - 50 = 150
});
});
