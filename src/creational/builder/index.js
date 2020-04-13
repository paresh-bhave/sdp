const IndiPaneerPizzaBuilder = require('./IndiPaneerPizzaBuilder');
const FarmhousePizzaBuilder = require('./FarmhousePizzaBuilder');
const PizzaBuilder = require('./PizzaBuilder');

const indiPaneerPizza = new IndiPaneerPizzaBuilder()
                              .setDough()
                              .addTopping("Black Olive")
                              .addSauce()
                              .build();

const farmousePizze = new FarmhousePizzaBuilder()
                              .setDough("Fresh Pan")
                              .addSauce()
                              .makeCheeseBurst()
                              .build();

const customPizza = new PizzaBuilder("Custome")
                              .setDough("Thin Crust")
                              .addTopping("Tomato")
                              .addTopping("Onion")
                              .addTopping("Capsicum")
                              .addTopping("Olives")
                              .addSauce("Mint Mayo")
                              .makeCheeseBurst()
                              .build();

indiPaneerPizza.order();
farmousePizze.order();
customPizza.order();

