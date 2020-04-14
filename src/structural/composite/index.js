const CatalogItem = require('./CatalogItem');
const CatalogGroup = require('./CatalogGroup');

const boots = new CatalogItem("Leather Boots", 79.99);
const sneakers = new CatalogItem("Kicks", 39.99);
const flipFlops = new CatalogItem("California work boots", 19.99);
const groupShoes = new CatalogGroup("Shoes and Such", [
  boots,
  sneakers,
  flipFlops
]);

const milsShake = new CatalogItem("Milkshake", 5.99);
const fries =  new CatalogItem("French Fries", 3.99)
const groupFood = new CatalogGroup("Food for while you try on clothes", [
  milsShake,
  fries
]);

const keychain = new CatalogItem("Key Chain", .99);
const catalog = new CatalogGroup("Clothes and Food", [
  keychain,
  groupShoes,
  groupFood
]);

console.log(`[info] Total catalog items: $${catalog.total}`);
catalog.print();
