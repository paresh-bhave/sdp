const path = require('path');
const FSProxy = require('./FSProxy');

const fs = new FSProxy(require('fs'));

const result = (error, contents) => {
  if (error) {
    console.error(error);
    process.exit(0);
  }
  console.log('[info] reading file...');
  console.log(contents);
};

const utf8 = 'UTF-8';

const proxyMD = path.join(__dirname, 'proxy.md');
fs.readFile(proxyMD, utf8, result);

/**
 * Uncomment following lines should throw error
 */
// const proxyTXT = path.join(__dirname, 'proxy.txt');
// fs.readFile(proxyTXT, utf8, result);
