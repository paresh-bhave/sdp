class Shopper {
  constructor(name = 'unknown') {
    this._name = name;
    this._shoppingList = [];
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  addShoppingItem(item) {
    this._shoppingList.push(item);
  }

  get shoppingList() {
    return this._shoppingList.join(',');
  }

  clone() {
    const __proto__ = Object.getPrototypeOf(this);
    const __cloned__ = Object.create(__proto__);

    __cloned__._name = this._name;
    __cloned__._shoppingList = [...this._shoppingList];

    return __cloned__;
  }
}

module.exports = Shopper;
