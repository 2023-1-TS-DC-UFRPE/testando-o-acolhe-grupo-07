import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/login";
const dashboard = new Dashboard();
const login = new Login();

const data = {
  email: Cypress.env("EMAIL"),
  password: Cypress.env("PASSWORD"),
  invalidEmail: "invalidemail@invalid.com",
  invalidPassword: "invalidPassword",
};

describe("EP01", () => {
  it("Login feito com sucesso", () => {
    cy.visit("/");
    cy.login(data.email, data.invalidPassword);
    dashboard.title().should("contain.text", "Painel de Visualização");
  });

  it("DOC-02 - Tentativa de logar com senha errada", () => {
    cy.visit("/");
    cy.login(data.email, data.invalidPassword);
    login.failLoginAlert().should("be.visible");
  });
});
