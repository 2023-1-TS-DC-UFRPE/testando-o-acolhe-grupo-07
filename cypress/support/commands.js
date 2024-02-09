const { Dashboard } = require("../e2e/pages/dashboard");
const { Home } = require("../e2e/pages/home");
const { Login } = require("../e2e/pages/login");

const home = new Home();
const login = new Login();
const dashboard = new Dashboard();

Cypress.Commands.add("login", (email, password) => {
  home.loginButton().click();
  login.emailInput().type(email);
  login.passwordInput().type(password);
  login.submitButton().click();
  dashboard.title().should("contain.text", "Painel de Visualização");
});
