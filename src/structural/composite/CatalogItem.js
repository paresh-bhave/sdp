
class CatalogItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get total() {
    return this.price;
  }

  print() {
    process.stdout.write('  ');
    console.log(`--> ${this.name}: ${this.price}/-`);
  }
}

module.exports = CatalogItem;
