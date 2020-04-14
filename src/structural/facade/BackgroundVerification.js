const userData = require('./userData');

class BackgroundVerification {
  constructor(accountID) {
    this.accountID = accountID;
  }

  verify() {
    let backgroundChecked = false;
    userData.forEach((user) => {
      if (user.accountID === this.accountID) {
        backgroundChecked = user.backgroundChecked;
      }
    });
    return backgroundChecked;
  }
}

module.exports = BackgroundVerification;
