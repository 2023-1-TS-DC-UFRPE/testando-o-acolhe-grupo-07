export class Home {
  loginButton() {
    return cy.get("button").contains("Entrar");
  }
}
