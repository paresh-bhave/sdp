const {
  writeFile,
  existsSync,
  readFileSync,
  unlink
} = require('fs');

const localStorage = 'localStorage.json';

class LocalStorage {
  constructor() {
    if (existsSync(localStorage)) {
      console.log(`[info] Loading items from ${localStorage}`);
      this.items = JSON.parse(readFileSync(localStorage));
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItem(key) {
    return this.items[key];
  }

  setItem(key, value) {
    this.items[key] = value;
    writeFile(localStorage, JSON.stringify(this.items), (err) => {
      if (err) console.error(err);
    });
  }

  clear() {
    this.items = {};
    unlink(localStorage, () => {
      console.log(`[info] ${localStorage} file removed`);
    })
  }
}

module.exports = new LocalStorage();
