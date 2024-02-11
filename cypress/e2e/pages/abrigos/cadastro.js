export class CadastroAbrigo {
  name() {
    return cy.get("#name");
  }
  zipCode() {
    return cy.get("#zipCode");
  }

  city() {
    return cy.get("#city");
  }

  street() {
    return cy.get("#street");
  }

  addressNumber() {
    return cy.get("#number");
  }

  phone() {
    return cy.get("#phone");
  }

  email() {
    return cy.get("#email");
  }

  capacity() {
    return cy.get("#capacity");
  }

  registerButton() {
    return cy.get("button").contains("Cadastrar");
  }
}
