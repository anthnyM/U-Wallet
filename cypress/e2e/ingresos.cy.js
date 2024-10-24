describe("Gestión de Ingresos", () => {
    it("Debería registrar y mostrar ingresos con descripción", () => {
        cy.visit("/index.html");

        // Registrar primer ingreso
        cy.get("#ingreso").type(3500);
        cy.get("#descripcion-ingreso").type("Salario");
        cy.get("input[type='submit']").click();

        // Registrar segundo ingreso
        cy.get("#ingreso").type(200);
        cy.get("#descripcion-ingreso").type("Venta de productos");
        cy.get("input[type='submit']").click();

        // Verificar que se muestran correctamente los ingresos con sus descripciones
        cy.get("#ingresos-div").should("contain", "3500");
        cy.get("#ingresos-div").should("contain", "Salario");
        cy.get("#ingresos-div").should("contain", "200");
        cy.get("#ingresos-div").should("contain", "Venta de productos");
    });
});
