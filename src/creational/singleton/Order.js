const logger = require('./Logger');

class Store {
  constructor(id, name, store) {
    this.id = id;
    this.name = name;
    this.store = store;
    logger.log(`Order "${id}-${name}" has been placed for "${store}"`);
  }
}

module.exports = Store;
