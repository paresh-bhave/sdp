const Shopper = require('./Shopper');

const scoutShopper = new Shopper();

scoutShopper.addShoppingItem('camping knife');
scoutShopper.addShoppingItem('tent');
scoutShopper.addShoppingItem('backpack');
scoutShopper.addShoppingItem('map');

module.exports = scoutShopper;
