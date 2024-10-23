describe("Gastador", () => {
    it("Muestra el gasto registrado", () => {
      cy.visit("/");
      cy.get("#gasto").type(50);
      cy.get("#registrar-gasto").click();
      cy.get("#gastos-div").should("contain", "50");
    });
  });
  