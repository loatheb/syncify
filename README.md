# SYNCFY
> convert your Asynchronous function to Synchronous in node.

### USAGE

* some async function

```js
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}
```

* how we use it before

```js
sleep(10)
  .then(doSomeThingWhenYouWakeUp);

(async function() {
  await sleep(10);
  await doSomeThingWhenYouWakeUp();
}());
```

* how we use it after **syncfy**

```js
const syncfy = require('syncfy');

const sleepSync = syncfy(sleep);
const doSomeThingWhenYouWakeUpSync = syncfy(doSomeThingWhenYouWakeUp);

sleepSync(10);
doSomeThingWhenYouWakeUpSync();
```

### LICENSE

MIT
