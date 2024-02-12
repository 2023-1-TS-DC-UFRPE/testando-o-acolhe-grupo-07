import { ShelterRegister } from "./register";

class Shelters {
  constructor() {
    this.register = new ShelterRegister();
  }

  registerButton() {
    return cy.get("#appContent").get("button").contains("Abrigo");
  }
}

export { Shelters };
