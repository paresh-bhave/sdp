const readline = require('readline');

const InventoryItem = require('./InventoryItem');
const Iterator = require('./Iterator');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const inventory = new Iterator([
  new InventoryItem("Poles", 9.99),
  new InventoryItem("Skis", 799.99),
  new InventoryItem("Boots", 799.99),
  new InventoryItem("Burgers", 5.99),
  new InventoryItem("Fries", 2.99),
  new InventoryItem("Shake", 4.99),
  new InventoryItem("Jeans", 59.99),
  new InventoryItem("Shoes", 39.99)
]);

console.log('[info] Invetory is ready...');
console.log('[info] Press RIGHT key for next item, LEFT key for previous item');
console.log('[info] Press TOP key for first item, DOWN key for last item');

process.stdin.on('keypress', (str, key) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);

  switch (key.name) {
    case 'right':
      inventory.next().writeLn();
      break;

    case 'left':
      inventory.prev().writeLn();
      break;

    case 'down':
      inventory.last().writeLn();
      break;

    case 'up':
      inventory.first().writeLn();
      break;

    case 'c':
      if (key.ctrl) {
        console.log('[info] exiting..!')
        process.exit()
      }
  }
});
