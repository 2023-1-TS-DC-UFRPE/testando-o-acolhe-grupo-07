export class ReceivedPage {
  title() {
    return cy.get(".page-title__title");
  }

  verifyReceivedFilter(filter) {
    return cy.get(".button-filter").contains(`Filtros Acolhidos (${filter})`);
  }
  verifyFamilyFilter(filter) {
    return cy.get(".button-filter").contains(`Filtros Família (${filter})`);
  }
  receivedFilter() {
    return cy.get(".button-filter").contains("Filtros Acolhidos");
  }

  /**
   * 
   * @param {*} filter | "Óbitos" | "Desaparecidos" | "Perdas de renda" | "Agravos de problema de sáude" | "PCDs"
   */
  chooseReceivedFilter(filter) {
    const options = {
      "Óbitos": 0,
      Desaparecidos: 1,
      "Perdas de renda": 2,
      "Agravos de problema de sáude": 3,
      "PCDs": 4,
    };
    return cy.get("mat-radio-group").children().eq(options[filter]).find("mat-radio-button").should("be.visible")
  }

}
