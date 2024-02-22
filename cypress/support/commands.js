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

Cypress.Commands.add("createShelter", (data) => {
  const getToken = () => {
    const options = {
      method: 'POST',
      url: "https://acolhebe-disciplina.innovagovlab.org/api/v1/auth/login",
      body: {
        "password": Cypress.env("PASSWORD"),
        "username": Cypress.env("EMAIL"), 
      }
    };
    return cy.request(options)
  }
  
  getToken().then(response => {
    const options = {
      method: 'POST',
      url: "https://acolhebe-disciplina.innovagovlab.org/api/v1/shelter",
      body: data,
      headers: {
        "X-Auth-Token": response.body,
        "Content-Type": "application/json"
      }
    };
    return cy.request(options)
  })

});

