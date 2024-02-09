describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.login(Cypress.env("email"), Cypress.env("password"));
  });
});
