const PizzeBuilder = require('./PizzaBuilder');

class IndiPaneerPizzaBuilder extends PizzeBuilder {
  constructor() {
    super('Indi Tandoori Paneer');
    this.toppings = [
      'Paneer',
      'Capsicum',
      'Red Paprika'
    ];
  }

  addSauce() {
    this.sauce = 'Mint Mayo';
    return this;
  }
}

module.exports = IndiPaneerPizzaBuilder;
