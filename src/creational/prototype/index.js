const scoutShopperProto = require('./scoutShopperProto');

const scoutCad1 = scoutShopperProto.clone();
scoutCad1.name = 'John Doe';
scoutCad1.addShoppingItem('slingshot');

const scoutCad2 = scoutShopperProto.clone();
scoutCad2.name = 'Jane Doe';
scoutCad2.addShoppingItem('reading light');

console.log(`${scoutCad1.name}: ${scoutCad1.shoppingList}`);
console.log(`${scoutCad2.name}: ${scoutCad2.shoppingList}`);
