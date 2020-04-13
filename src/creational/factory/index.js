const signupFactory = require('./signupFactory');

const fbSignup = signupFactory('John Doe', 'john.doe@fb.com', 'fb', 001);
const googleSignup = signupFactory('Jane Doe', 'jane.doe@gmail.com', 'google', 001);
const siteSignup = signupFactory('Jack Doe', 'contact@jackdoe.me');

fbSignup.printDetails();
googleSignup.printDetails();
siteSignup.printDetails();
