const userData = require('./userData');

class BankVerification {
  constructor(accountID) {
    this.accountID = accountID;
  }

  verify() {
    let accountExists = false;
    userData.forEach((user) => {
      if (user.accountID === this.accountID) {
        accountExists = true;
      }
    });
    return accountExists;
  }
}

module.exports = BankVerification;
