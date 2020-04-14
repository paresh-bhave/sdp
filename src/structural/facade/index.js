const LoanApplication = require('./LoanApplication');

const newApplication1 = new LoanApplication('B001', 9999);
const newApplication2 = new LoanApplication('B002', 14999);
const newApplication3 = new LoanApplication('B003', 5999);
const newApplication4 = new LoanApplication('B004', 5999);

newApplication1.applyStatus();
newApplication2.applyStatus();
newApplication3.applyStatus();
newApplication4.applyStatus();
