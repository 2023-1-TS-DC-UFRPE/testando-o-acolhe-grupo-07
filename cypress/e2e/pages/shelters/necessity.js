class Clothes {
  /**
   *
   * @param {Integer} quantity 0 | 1 | 2 | 3 | 4
   */
  selectPlusSize(quantity) {
    return cy
      .get(".sublist")
      .contains("Plus Size")
      .parent()
      .find("availability-bar")
      .find("div")
      .children()
      .eq(quantity);
  }

  /**
   *
   * @param {Integer} quantity 0 | 1 | 2 | 3 | 4
   */
  selectNewborn(quantity) {
    return cy
      .get(".sublist")
      .contains("Recém-nascido")
      .parent()
      .find("availability-bar")
      .find("div")
      .children()
      .eq(quantity);
  }

  /**
   *
   * @param {Integer} quantity 0 | 1 | 2 | 3 | 4
   */
  selectChild(quantity) {
    return cy
      .get(".sublist")
      .contains("Infantil")
      .parent()
      .find("availability-bar")
      .find("div")
      .children()
      .eq(quantity);
  }

  /**
   *
   * @param {Integer} quantity 0 | 1 | 2 | 3 | 4
   */
  selectAdult(quantity) {
    return cy
      .get(".sublist")
      .contains("Adulto")
      .parent()
      .find("availability-bar")
      .find("div")
      .children()
      .eq(quantity);
  }
}

export class Necessity {
  constructor() {
    this.clothes = new Clothes();
  }
}
