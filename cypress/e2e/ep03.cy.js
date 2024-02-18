import { Shelters } from "./pages/shelters/shelters";
import { Dashboard } from "./pages/dashboard";
import { Sidebar } from "./pages/sidebar";
import { FamilyPage } from "./pages/shelters/family/family";

import { familyData } from "../fixtures/ep03Data";

const dashboard = new Dashboard();
const sidebar = new Sidebar();
const shelters = new Shelters();
const family = new FamilyPage();

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
    family.zipCode().type(familyData.zipCode);
    family.number().type(familyData.number);
    family.affectedHouse(familyData.affectedHouse);
    family.addMemberButton().click();

    familyData.members.forEach((member) => {
      family.member.addMember(member);
      family.addMemberButton().click();
    });

    family.member.cancelButton().click();
    family.registerFamilyButton().click();

    cy.contains("Família cadastrada.").should("be.visible");
  });
});
