
class Logger {
  constructor() {
    // this.instance = null;
    this.logs = [];
  }

  count() {
    return this.logs.length;
  }

  log(message) {
    const timeStamp = new Date().toISOString();
    this.logs.push({
      message,
      timeStamp
    });
    console.log(`[LOG] ${timeStamp}: ${message}`);
  }


  /**
   * In other programming languages you may want to
   * declare a method like this.
   *
   * Since in Node.js, instance is created on first initialization
   * and later cached into the module.exports object to return the same,
   * you don't need following method to achieve singleton
   *
   *
  static getInstance() {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }
  */
}

module.exports = new Logger();
