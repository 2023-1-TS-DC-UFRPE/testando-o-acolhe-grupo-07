export class Sidebar {
  painelVisualizacaoButton() {
    return cy
      .get("fuse-vertical-navigation-basic-item")
      .contains("Painel de Visualização");
  }

  usuarios() {
    return cy
      .get(".fuse-vertical-navigation-item-wrapper")
      .contains("Usuários");
  }
  abrigosButton() {
    return cy.get(".fuse-vertical-navigation-item-wrapper").contains("Abrigos");
  }
  voluntariosButton() {
    return cy
      .get(".fuse-vertical-navigation-item-wrapper")
      .contains("Voluntários");
  }

  acolhidosButton() {
    return cy
      .get(".fuse-vertical-navigation-item-wrapper")
      .contains("Acolhidos");
  }
}
