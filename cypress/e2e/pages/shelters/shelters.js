import { Necessity } from "./necessity";
import { ShelterRegister } from "./register";

class Shelters {
  constructor() {
    this.register = new ShelterRegister();
    this.necessity = new Necessity();
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

  editNecessityButton() {
    return cy.get(
      "div.ng-star-inserted > .mdc-icon-button > .mat-mdc-button-touch-target"
    );
  }
  cancelEditNecessityButton() {
    return cy.get(
      ".card__button > div.ng-star-inserted > .mdc-icon-button > .mat-mdc-button-touch-target"
    );
  }
}
export { Shelters };
