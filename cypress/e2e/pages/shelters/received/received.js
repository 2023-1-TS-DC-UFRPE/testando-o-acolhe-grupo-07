import { Member } from "./member";

export class ReceivedPage {
  constructor() {
    this.member = new Member();
  }

  zipCode() {
    return cy.get("#zipCode");
  }

  state(state) {
    cy.get("#state").click();
    cy.get("mat-option").contains(state).click();
  }

  number() {
    return cy.get("#number");
  }

  /**
   *
   * @param {string} option |
   * "Não" |
   * "Sim, está completamente inabitável" |
   * "Sim, está parcialmente inabitável" |
   * "Sim, está habitável, mas precisa de reparos" |
   * "Sim, está habitável e não precisa de reparos"
   */
  affectedHouse(option) {
    cy.get("#moradiaAtingida").click();
    cy.get("mat-option").contains(option).click();
  }

  addMemberButton() {
    return cy.get("button").contains("Membro da Família");
  }
}
