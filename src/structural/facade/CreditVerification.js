const userData = require('./userData');

class CreditVerification {
  constructor(accountID, amount) {
    this.accountID = accountID;
    this.amount = amount;
  }

  verify() {
    let result = false;
    userData.forEach((user) => {
      if (user.accountID === this.accountID) {
        if (user.creditScore >= 500) {
          const MAX_LIMIT = user.creditScore * 10;
          if (this.amount <= MAX_LIMIT) {
            result = this.amount;
          } else {
            result = MAX_LIMIT;
          }
        }
      }
    });
    return result;
  }
}

module.exports = CreditVerification;
