export class ShelterRegister {
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
    return cy.get(".shelter-add-button");
  }

  selectType(type) {
    cy.get("#type").click();
    cy.get("mat-option").contains(type).click();
  }

  selectOwner(owner) {
    const splitOwner = owner.replace(" ", "+");
    const ownerResponse = `https://acolhebe-disciplina.innovagovlab.org/api/v1/user?enabled=true&name=${splitOwner}&page=null&size=5`;
    cy.get("#owner").click();
    cy.get('[placeholder="Busque pelo nome do usuário"]').type(owner);

    cy.intercept("GET", ownerResponse).as("getUsers");

    cy.wait("@getUsers").then(() => {
      cy.get("mat-option").contains(owner).click();
    });
  }
}
