
class MoneyStack {
  constructor(billSize) {
    this.billSize = billSize;
    this.next  = null;
  }

  withdraw(amount) {
    const noOfBills = Math.floor(amount / this.billSize);
    if (noOfBills > 0) {
      console.log(` ${noOfBills} $${this.billSize} bill(s) have been withdrawn`);
      amount = amount - (this.billSize * noOfBills);
    }
    if(amount > 0 && this.next) this.next.withdraw(amount);
  }

  setNext(stack) {
    this.next = stack;
  }
}

module.exports = MoneyStack;
