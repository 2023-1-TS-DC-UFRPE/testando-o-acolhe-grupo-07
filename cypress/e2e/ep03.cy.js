import { Shelters } from "./pages/shelters/shelters";
import { Dashboard } from "./pages/dashboard";
import { Sidebar } from "./pages/sidebar";
import { FamilyPage } from "./pages/shelters/family/family";

import { familyData, shelterData } from "../fixtures/ep03Data";

const dashboard = new Dashboard();
const sidebar = new Sidebar();
const shelters = new Shelters();
const family = new FamilyPage();

describe("EP-03 > ST-01", () => {
  before(() => {
    cy.createShelter(shelterData);
  });
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    dashboard.title().should("contain.text", "Painel de Visualização");
  });

  it("DOC-12 - Cadastro da família", () => {
    sidebar.abrigosButton().click();
    shelters.selectShelter(shelterData.name).click();
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

  it("DOC-13 - Falha no cadastro do membro da família por ausência, ou formatação incorreta, de campo obrigatório", () => {
    sidebar.abrigosButton().click();
    shelters.selectShelter("Abrigo 7 - Luan Accioly").click();
    shelters.selectTabHeader("Acolhidos").click();

    shelters.selectFirstOnTable().click();
    shelters.editFamilyButton().click();

    family.member.name().clear();
    family.member.updateButton().should("be.disabled");
    family.member.selectGender("Feminino");
    family.member.nameErrorMessage().should("be.visible", { force: true });
    family.member.updateButton().should("be.disabled");
  });
});
