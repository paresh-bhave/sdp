/**
 * Note: Technically, a proxy class must match full interface of the Object
 *
 * That means instance created with `new FSProxy()` must have all the members that
 * a normal `fs` module provides. For the sake of example, we're only implementing one method `readFile`
 */
class FSProxy {
  constructor(fs) {
    this.fs = fs;
  }

  readFile(path, format, callback) {
    if (!path.match(/.md$|.MD$/)) {
      return callback(new Error('Can only read Markdown (.md) files'));
    }
    this.fs.readFile(path, format, (error, contents) => {
      if (error) {
        console.error(error);
        return callback(error);
      }
      return callback(null, contents);
    });
  }
}

module.exports = FSProxy;
