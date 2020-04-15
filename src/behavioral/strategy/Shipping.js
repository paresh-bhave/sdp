
class Shipping {
  constructor() {
    this.company = null;
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate(parcel) {
    return this.company.calculate(parcel);
  }
}

module.exports = Shipping;
