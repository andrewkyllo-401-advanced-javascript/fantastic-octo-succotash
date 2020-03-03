const fs = require('fs');
const util = require('util');

const events = require('./events');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const files = {};

files.loadFile = async file => await readFile(file);

files.saveFile = async (file, text) => {
  try {
    let buffer = await files.convertBuffer(text);
    writeFile(file, buffer);
  } catch (error) {
    events.emit('error', error);
  }
};

files.convertBuffer = buffer => {
  try {
    buffer = buffer.toString().toUpperCase();
    // should take in a buffer and return a new Buffer
    // which has the capitalized contents of the input buffer
    return Buffer.from(buffer);
  } catch (error) {
    events.emit('error', error)
  }
}

files.alterFile = async file => {
  // load some file into a buffer
  try {
    let contents = await files.loadFile(file);
    // convert the buffer into a uppercased version of its string representation
    // save the file
    await files.saveFile(file, contents)
    events.emit('save', file)
  } catch (error) {
    events.emit('error', error)
  }

}

module.exports = files;
