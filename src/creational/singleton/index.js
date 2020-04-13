const logger = require('./Logger');
const Store = require('./Store');
const Order = require('./Order');

logger.log('App started...');

const sportsStore = new Store('Ironman', [
  {
    id: 1,
    itemName: 'Jogging Shoes'
  },
  {
    id: 2,
    itemName: 'Running Shoes'
  }
]);

const order = new Order(1, 'FitnessCenter', sportsStore.name);

logger.log(`Ordering completed for ${order.id}`);
logger.log(`Total logs printed ${logger.count()}`);

