const PizzeBuilder = require('./PizzaBuilder');

class FarmhousePizzaBuilder extends PizzeBuilder {
  constructor() {
    super('Farmhouse');
    this.toppings = [
      'Tomato',
      'Onion',
      'Capsicum',
      'Jalapeno'
    ];
  }
}

module.exports = FarmhousePizzaBuilder;
