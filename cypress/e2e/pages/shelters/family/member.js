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
  cpf() {
    return cy.get("#cpf");
  }

  selectRelationship(relationship) {
    cy.get("#relationshipWithChief").click();
    cy.get("mat-option").contains(relationship).click();
  }

  /**
   * @param {boolean} isResponsible
   */
  isResponsible(isResponsible) {
    isResponsible
      ? cy.contains("Responsável pela unidade familiar").click()
      : cy.log("Não é responsável");
  }

  selectBirthDate(date) {
    cy.contains("Data de Nascimento").click();
    cy.get(".mat-calendar-content").contains(date.year).click();
    cy.get(".mat-calendar-content").contains(date.month).click();
    cy.get(".mat-calendar-content").contains(date.day).click();
  }

  addButton() {
    return cy.get("button").contains("Adicionar");
  }

  cancelButton() {
    return cy.get(".dialog__close");
  }

  addMember(member) {
    this.name().type(member.name);
    this.cpf().type(member.cpf);
    this.selectGender(member.gender);
    this.selectBirthDate(member.birthDate);
    this.declareColor(member.declaredColor);
    member.isResponsible
      ? this.isResponsible(member.isResponsible)
      : this.selectRelationship(member.relationshipToResponsible);

    this.addButton().click();
  }
}
