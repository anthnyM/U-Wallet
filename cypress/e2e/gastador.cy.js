describe("Gestión de Gastos", () => {
  it("Debería registrar y mostrar gastos con descripción", () => {
      cy.visit("/Gastos.html");

      cy.get("#gasto").type(50);
      cy.get("#descripcion-gasto").type("Compra de comida");
      cy.get("input[type='submit']").click();

      cy.get("#gasto").type(100);
      cy.get("#descripcion-gasto").type("Transporte");
      cy.get("input[type='submit']").click();

      cy.get("#gastos-div").should("contain", "50");
      cy.get("#gastos-div").should("contain", "Compra de comida");
      cy.get("#gastos-div").should("contain", "100");
      cy.get("#gastos-div").should("contain", "Transporte");
  });
});
