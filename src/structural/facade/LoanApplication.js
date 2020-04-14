const BankVerification = require('./BankVerification');
const BackgroundVerification = require('./BackgroundVerification');
const CreditVerification = require('./CreditVerification');

class LoanApplication {
  constructor(accountID, amount) {
    this.accountID = accountID;
    this.amount = amount;
  }

  applyStatus() {
    const bankVerification = new BankVerification(this.accountID);
    const backgroundVerification = new BackgroundVerification(this.accountID);
    const creditVerification = new CreditVerification(this.accountID, this.amount);

    if (!bankVerification.verify()) {
      console.log(`#Status for ${this.accountID}: Account does not exists with the bank`);
    } else if (!backgroundVerification.verify()) {
      console.log(`#Status for ${this.accountID}: Background is not verified yet`);
    } else if (!creditVerification.verify()) {
      console.log(`#Status for ${this.accountID}: Account is below credit score for loan application`);
    } else {
      const result = creditVerification.verify();
      console.log(`#Status for ${this.accountID}: Loan amount of $${result}/- is approved`);
    }
  }
}

module.exports = LoanApplication;
