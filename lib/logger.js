'use strict';

const events = require('./events');

const logger = {};

logger.save = payload => {
  const status = {
    stats:0,
    file: payload,
    message: 'Saved Properly',
  }
  console.log(status);
}

logger.err = payload => {
  const status = { status: 1, mesage: payload }
  console.error(status);
}

events.on('save', message => {
  logger.save(message);
})
events.on('error', message => {
  logger.err(message)
})

// add an events.on for file save that calls logger.save
// add an events.on for file error that calls logger.err

module.exports = logger;
