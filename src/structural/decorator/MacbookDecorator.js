
class MackbookDecorator {
  constructor() {}

  static add8GBRam(macbook) {
    macbook.memory = '8gb';
    macbook.price += 50;
  }

  static add16GBRam(macbook) {
    macbook.memory = '16gb';
    macbook.price += 100;
  }

  static add256GBSSD(macbook) {
    macbook.storage = '256gb';
    macbook.price += 200;
  }

  static add512GBSSD(macbook) {
    macbook.storage = '512gb';
    macbook.price += 400;
  }

  static add2GBGraphic(macbook) {
    macbook.graphicCard = '2gb';
    macbook.price += 100;
  }
}

module.exports = MackbookDecorator;
