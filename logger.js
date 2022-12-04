const EventEmitter = require('events')
const uuid = require('uuid')

//console.log(uuid.v4()) -> 7f3ed3f3-c119-424e-835e-e6886f3fb09d
class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit('message', {id:uuid.v4(), msg})
  }
}

// module.exports = Logger;

const Logger = require('./logger')

const logger = new Logger();

logger.on('message',(data)=>console.log("Called listener: ",data))

logger.log('Hello world')
logger.log('Hi')
logger.log('Hello')