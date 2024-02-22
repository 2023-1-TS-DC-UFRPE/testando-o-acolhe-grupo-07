import { Dashboard } from "./pages/dashboard";
import { ReceivedPage } from "./pages/received";
import { Sidebar } from "./pages/sidebar";

const dashboard = new Dashboard();
const received = new ReceivedPage();
const sidebar = new Sidebar();

describe("ST-05", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.contains("Painel de Visualização").should("be.visible");
  });


  it("DOC-04", () => {
    cy.intercept('GET', 'https://acolhebe-disciplina.innovagovlab.org/api/v1/family?personSituation=pcd&query=&page=0&size=25').as('searchFiltered')
    sidebar.acolhidosButton().click();
    received.receivedFilter().click();
    received.chooseReceivedFilter('PCDs').click()
    cy.wait('@searchFiltered').its('response.statusCode').should('eq', 200)

  });

  it("DOC-09", () => {
    const deathURL = "/people-sheltered?filter=%C3%93bitos";
    dashboard.deathsLink().click();
    cy.url().should("contain", deathURL);
    received.title().should("contain", "Acolhidos");
    received.verifyReceivedFilter("Óbitos").should("be.visible");
  });

  it("DOC-10", () => {
    const completelyUninhabitableURL =
      "/people-sheltered?filter=Completamente%20in%C3%A1bitavel";
    dashboard.completelyUninhabitable().click();
    cy.url().should("contain", completelyUninhabitableURL);
    received.title().should("contain", "Acolhidos");
    received
      .verifyFamilyFilter("Abrigadas, Completamente inábitavel")
      .should("be.visible");
  });
});
