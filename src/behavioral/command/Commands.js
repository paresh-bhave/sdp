const { writeFile, unlink } = require('fs');
const path = require('path');

class CreateCommand {
  constructor(fileName, text) {
    this.fileName = fileName;
    this.body = text;
    this.filePath = path.join(__dirname, fileName);
  }

  get name() {
    return `create ${this.fileName}`;
  }

  execute() {
    writeFile(this.filePath, this.body, f => f);
  }

  undo() {
    unlink(this.filePath, f => f);
  }
}

class ExitCommand {
  get name() {
    return 'exiting... bye!';
  }

  execute() {
    process.exit(0);
  }
}

module.exports = { CreateCommand, ExitCommand };
