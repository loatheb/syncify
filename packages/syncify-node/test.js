const syncfy = require('./index');

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}

const sleepSync = syncfy(sleep);
console.log(new Date());
sleepSync(3);
console.log(new Date());