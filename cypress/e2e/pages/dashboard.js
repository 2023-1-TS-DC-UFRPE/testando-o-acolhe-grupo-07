export class Dashboard {
  title() {
    return cy.get(".page-title__title");
  }

  deathsLink() {
    return cy.get("a").contains("Óbitos");
  }

  completelyUninhabitable() {
    return cy.get("a").contains("Completamente inábitavel");
  }
}
