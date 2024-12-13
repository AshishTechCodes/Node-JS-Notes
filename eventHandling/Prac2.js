const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

myEmitter.emit('greet', 'Ashish');