export class Member {
  name() {
    return cy.get("#name");
  }

  selectGender(gender) {
    cy.get("#gender").click();
    cy.get("mat-option").contains(gender).click();
  }

  declareColor(color) {
    cy.get("#colorRace").click();
    cy.get("mat-option").contains(color).click();
  }

  /**
   * @param {boolean} isResponsible
   */
  isResponsible(isResponsible) {
    isResponsible
      ? cy.contains("Responsável pela unidade familiar").click()
      : cy.log("Não é responsável");
  }

  birthDate() {
    cy.get('[formcontrolname="birthdate"]');
  }
}
