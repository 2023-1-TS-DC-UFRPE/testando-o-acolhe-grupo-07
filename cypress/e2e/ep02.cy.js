import { Shelters } from "./pages/shelters/shelters";
import { Dashboard } from "./pages/dashboard";
import { Sidebar } from "./pages/sidebar";

const dashboard = new Dashboard();
const sidebar = new Sidebar();
const shelters = new Shelters();

function getRandomNecessityValue() {
  const min = Math.ceil(0);
  const max = Math.floor(4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const shelterData = {
  name: "Abrigo UFRPE",
  zipCode: "50630-050",
  type: "Escola",
  address: {
    city: "Recife",
    street: "Rua Manoel de Medeiros",
    addressNumber: "123",
  },
  phone: "8131812953",
  emailAddress: "barroscarvalho@educ.gov.br",
  owner: "Luan Accioly",
  capacity: "50",
};

describe("EP-02 > ST-03", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    dashboard.title().should("contain.text", "Painel de Visualização");
  });

  it("DOC-11 - Campos do abrigo devem possuir dados válidos", () => {
    // Para esse caso, escolhemos não informar o capo 'nome'
    sidebar.abrigosButton().click();
    cy.url().should("include", "/shelters");
    shelters.registerButton().click();
    // shelters.register.name().type(shelterData.name);
    shelters.register.selectType(shelterData.type);
    shelters.register.zipCode().type(shelterData.zipCode);
    shelters.register.addressNumber().type(shelterData.address.addressNumber);
    shelters.register.phone().type(shelterData.phone);
    shelters.register.email().type(shelterData.emailAddress);
    shelters.register.capacity().type(shelterData.capacity);
    shelters.register.selectOwner(shelterData.owner);

    shelters.register.registerButton().should("be.disabled");
  });

  it("DOC-14 - Definir necessidades do abrigo", () => {
    sidebar.abrigosButton().click();
    shelters.selectShelter("Abrigo 7 - Luan Accioly").click();
    shelters.editNecessityButton().click();

    shelters.necessity.clothes.selectNewborn(getRandomNecessityValue()).click();
    cy.contains("Roupas - Recém-nascido alterado.").should("be.visible");

    shelters.necessity.clothes.selectChild(getRandomNecessityValue()).click();
    cy.contains("Roupas - Infantil alterado.").should("be.visible");

    shelters.necessity.clothes.selectAdult(getRandomNecessityValue()).click();
    cy.contains("Roupas - Adulto alterado.").should("be.visible");

    shelters.necessity.clothes
      .selectPlusSize(getRandomNecessityValue())
      .click();
    cy.contains("Roupas - Plus Size alterado.").should("be.visible");

    shelters.cancelEditNecessityButton().click();
  });
});
