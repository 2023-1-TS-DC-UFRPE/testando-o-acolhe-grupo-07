import { Abrigos } from "./pages/abrigos/abrigos";
import { Dashboard } from "./pages/dashboard";
import { Sidebar } from "./pages/sidebar";

const dashboard = new Dashboard();
const sidebar = new Sidebar();
const abrigos = new Abrigos();

const dadosAbrigo = {
  nome: "Abrigo 1",
  endereco: "Rua 1, 123",
  telefone: "1234567890",
  email: "",
};

describe("ST-03", () => {
  before(() => {
    cy.visit("/");
    cy.login(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    dashboard.title().should("contain.text", "Painel de Visualização");
  });

  it("DOC-11", () => {
    sidebar.abrigos().click();
    cy.url().should("include", "/shelters");
    abrigos.registerButton().click();
    abrigos.cadastro.name().type("Abrigo 1");
  });
});
