import { Dashboard } from "./pages/dashboard";
import { ReceivedPage } from "./pages/received";

const dashboard = new Dashboard();
const received = new ReceivedPage();
describe("ST-05", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.contains("Painel de Visualização").should("be.visible");
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
