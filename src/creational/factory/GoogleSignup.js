const UserSignup = require('./UserSignup');

class GoogleSignup extends UserSignup {
  constructor(name, email, id) {
    super(name, email, 'google');
    this._id = id;
  }
}

module.exports = GoogleSignup;
