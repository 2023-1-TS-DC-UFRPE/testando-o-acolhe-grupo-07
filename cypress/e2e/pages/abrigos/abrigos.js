import { CadastroAbrigo } from "./cadastro";

class Abrigos {
  constructor() {
    this.cadastro = new CadastroAbrigo();
  }

  registerButton() {
    return cy.get("#appContent").get("button").contains("Abrigo");
  }
}

export { Abrigos };
