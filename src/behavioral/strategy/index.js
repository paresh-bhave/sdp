const Shipping = require('./Shipping');
const { UPS, USPS, FedEx } = require('./Strategies');

const ups = new UPS();
const usps = new USPS();
const fedex = new FedEx();

const parcel = {
  from: "76712",
  to: "10012",
  weight: 30,
  dist: 10
};

const shipping = new Shipping();

shipping.setStrategy(ups);
console.log(`[info] UPS delivery for ${parcel.weight}lbs costs $${shipping.calculate(parcel)}`);

shipping.setStrategy(usps);
console.log(`[info] USPS delivery for ${parcel.weight}lbs costs $${shipping.calculate(parcel)}`);

shipping.setStrategy(fedex);
console.log(`[info] FEDEX delivery for ${parcel.weight}lbs costs $${shipping.calculate(parcel)}`);
