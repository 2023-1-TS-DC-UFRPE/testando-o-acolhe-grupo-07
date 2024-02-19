import { ShelterRegister } from "./register";

class Shelters {
  constructor() {
    this.register = new ShelterRegister();
  }

  registerButton() {
    return cy.get("#appContent").get("button").contains("Abrigo");
  }

  selectShelter(shelter) {
    return cy.get("tr > td").contains(shelter);
  }

  /**
   *
   * @param {string} option | "Status" | "Informações" | "Time" | "Acolhidos"
   */
  selectTabHeader(option) {
    const options = {
      Status: "#mat-tab-label-0-0",
      Informações: "#mat-tab-label-0-1",
      Time: "#mat-tab-label-0-2",
      Acolhidos: "#mat-tab-label-0-3",
    };
    return cy.get(options[option]);
  }

  addFamilyButton() {
    return cy.get(".shelter-families__buttons");
  }

  addFamilyManuallyButton() {
    return cy.get("button").contains("Adicionar Manualmente");
  }

  familyTable() {
    return cy.get("tbody");
  }

  selectFirstOnTable() {
    return cy.get("person-name-clickable").eq(0);
  }

  editFamilyButton() {
    return cy.get('[data-mat-icon-name="pencil"]').parent();
  }

}
export { Shelters };
