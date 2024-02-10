describe("Testes de Login", () => {
  it("Login feito com sucesso", () => {
    cy.visit("/");
    cy.login(Cypress.env("CYPRESS_EMAIL"), Cypress.env("CYPRESS_PASSWORD"));
  });
});
