const FacebookSignup = require('./FacebookSignup');
const GoogleSignup = require('./GoogleSignup');
const UserSignup = require('./UserSignup');


const signupFactory = (name, email, type, id) => {
  switch(type) {
    case 'fb': return new FacebookSignup(name, email, id);
    case 'google': return new GoogleSignup(name, email, id);
    default: return new UserSignup(name, email);
  }
};

module.exports = signupFactory;
