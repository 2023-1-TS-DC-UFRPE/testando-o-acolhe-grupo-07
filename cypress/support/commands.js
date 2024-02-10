import { Home } from "../e2e/pages/home";
import { Login } from "../e2e/pages/login";

const home = new Home();
const login = new Login();

Cypress.Commands.add("login", (email, password) => {
  home.loginButton().click();
  login.emailInput().type(email);
  login.passwordInput().type(password);
  login.submitButton().click();
});
