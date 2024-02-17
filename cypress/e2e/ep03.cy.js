import { Shelters } from "./pages/shelters/shelters";
import { Dashboard } from "./pages/dashboard";
import { Sidebar } from "./pages/sidebar";
import { ReceivedPage } from "./pages/shelters/received/received";

import { receivedData } from "../fixtures/ep03Data";

const dashboard = new Dashboard();
const sidebar = new Sidebar();
const shelters = new Shelters();
const received = new ReceivedPage();

describe("ST-01", () => {
  before(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    dashboard.title().should("contain.text", "Painel de Visualização");
  });

  it("DOC-12", () => {
    sidebar.abrigosButton().click();
    shelters.selectShelter("Abrigo 7 - Luan Accioly").click();
    shelters.selectTabHeader("Acolhidos").click();
    shelters.addFamilyButton().click();
    shelters.addFamilyManuallyButton().click();
    received.zipCode().type(receivedData.zipCode);
    received.number().type(receivedData.number);
    received.affectedHouse(receivedData.affectedHouse);
    received.addMemberButton().click();

    receivedData.members.forEach((member) => {
      received.member.addMember(member);
      received.addMemberButton().click();
    });

    received.member.cancelButton().click();
    received.registerFamilyButton().click();

    cy.contains("Família cadastrada.").should("be.visible");
  });
});
