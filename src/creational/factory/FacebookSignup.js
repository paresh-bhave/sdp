const UserSignup = require('./UserSignup');

class FacebookSignup extends UserSignup {
  constructor(name, email, id) {
    super(name, email, 'fb');
    this._id = id;
  }
}

module.exports = FacebookSignup;
