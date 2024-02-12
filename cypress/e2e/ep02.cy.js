import { Shelters } from "./pages/abrigos/shelters";
import { Dashboard } from "./pages/dashboard";
import { Sidebar } from "./pages/sidebar";

const dashboard = new Dashboard();
const sidebar = new Sidebar();
const shelters = new Shelters();

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
  owner: "Julyanne Correia",
  capacity: "50",
};

describe("ST-03", () => {
  before(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    dashboard.title().should("contain.text", "Painel de Visualização");
  });

  it("DOC-11", () => {
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
});
