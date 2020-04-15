const MoneyStack = require('./MoneyStack');

class ATM {
  constructor() {
    const bills = [1000, 500, 100, 50, 10];
    const stacks = [];

    for(let i = 0; i < 5; i++) {
      stacks.push(new MoneyStack(bills[i]));
    }

    for(let j = 0; j < stacks.length - 2; j++) {
      stacks[j].setNext(stacks[j+1]);
    }

    this.head = stacks[0];
  }

  withdraw(amount) {
    if (amount % 10 !== 0) {
      console.log('\n#Transaction Error: Please enter amount multiple of 10s');
      return;
    }
    console.log('\n#Transaction Details:')
    this.head.withdraw(amount);
  }
}

module.exports = ATM;
