
class UPS {
  calculate(parcel) {
    return (parcel.dist * parcel.weight) + 0.30;
  }
}

class USPS {
  calculate(parcel) {
    return parcel.weight + 5.75;
  }
}

class FedEx {
  calculate(parcel) {
    return ((parcel.dist * parcel.weight) / 2) + 2.30;
  }
}

module.exports = { UPS, USPS, FedEx };
