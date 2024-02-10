describe("Testes de Login", () => {
  it("Login feito com sucesso", () => {
    cy.visit("/");
    cy.login(Cypress.env("email"), Cypress.env("password"));
  });
});
