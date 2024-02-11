export class Sidebar {
  painelVisualizacao() {
    return cy
      .get("fuse-vertical-navigation-basic-item")
      .contains("Painel de Visualização");
  }

  usuarios() {
    return cy
      .get(".fuse-vertical-navigation-item-wrapper")
      .contains("Usuários");
  }
  abrigos() {
    return cy.get(".fuse-vertical-navigation-item-wrapper").contains("Abrigos");
  }
  voluntarios() {
    return cy
      .get(".fuse-vertical-navigation-item-wrapper")
      .contains("Voluntários");
  }

  acolhidos() {
    return cy
      .get(".fuse-vertical-navigation-item-wrapper")
      .contains("Acolhidos");
  }
}
