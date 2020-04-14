
class CatalogGroup {
  constructor(name, composites) {
    this.name = name;
    this.composites = composites;
  }

  get total() {
    return this.composites.reduce((total, nextItem) => {
      return total + nextItem.total
    }, 0);
  }

  print() {
    console.log(`--> ${this.name.toUpperCase()}`);
    this.composites.forEach((item) => {
      process.stdout.write('  ');
      item.print();
    });
  }
}

module.exports = CatalogGroup;
