const Pizza = require('./Pizza');

class PizzaBuilder {
  constructor(name) {
    this.name = name;
    this.toppings = [];
  }

  setDough(dough = 'classic') {
    this.dough = dough;
    return this;
  }

  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }

  addSauce(sauce = 'tomato') {
    this.sauce = sauce;
    return this;
  }

  makeCheeseBurst() {
    this.isCheeseBurst = true;
    return this;
  }

  build() {
    return new Pizza(this);
  }
}

module.exports = PizzaBuilder;
