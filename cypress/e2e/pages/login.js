export class Login {
  emailInput() {
    return cy.get("#email");
  }
  passwordInput() {
    return cy.get("#password");
  }
  submitButton() {
    return cy.get("button").contains("Entrar");
  }
  failLoginAlert() {
    return cy
      .get("fuse-alert")
      .should("contain.text", " E-mail ou senha inválidos ");
  }
}
