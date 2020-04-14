
class MacBook {
  constructor() {
    this.memory = '4gb';
    this.storage = '128gb';
    this.graphicCard = '1gb';
    this.price = 1299;
  }

  order() {
    console.log(`[info] Order placed for MacBook with ${this.memory} RAM, ${this.storage} SSD and ${this.graphicCard}: $${this.price}/-`);
  }
}

module.exports = MacBook;
