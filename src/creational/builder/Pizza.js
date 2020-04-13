
class Pizza {
  constructor(builder) {
    this.name = builder.name;
    this.dough = builder.dough;
    this.toppings = builder.toppings.join(',');
    this.sauce = builder.sauce;
    this.isCheeseBurst = builder.isCheeseBurst;
  }

  order() {
    const cheeseBurst = this.isCheeseBurst ? 'with "cheese burst" ' : '';
    console.log(`#Order for "${this.name}" with dough "${this.dough}", toppings "${this.toppings}", sauce "${this.sauce}" ${cheeseBurst}is placed.`);
  }
}

module.exports = Pizza;
