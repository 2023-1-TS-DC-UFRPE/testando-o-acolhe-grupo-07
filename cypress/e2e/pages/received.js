export class ReceivedPage {
  title() {
    return cy.get(".page-title__title");
  }

  verifyReceivedFilter(filter) {
    return cy.get(".button-filter").contains(`Filtros Acolhidos (${filter})`);
  }
}
