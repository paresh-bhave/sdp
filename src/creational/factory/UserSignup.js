
class UserSignup {
  constructor(name, email, source = 'site') {
    this._name = name;
    this._email = email;
    this._source = source;
  }

  printDetails() {
    console.log(`User "${this._name}" has registered via "${this._source}"`);
  }
}

module.exports = UserSignup;
