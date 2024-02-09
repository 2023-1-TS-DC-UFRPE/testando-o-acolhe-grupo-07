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
}
