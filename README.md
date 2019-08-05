# SYNCIFY-test

> convert Asynchronous function to Synchronous in node.

## USAGE

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

* how we use it after **syncify**

```js
const syncify = require('syncify');

const sleepSync = syncify(sleep);
const doSomeThingWhenYouWakeUpSync = syncify(doSomeThingWhenYouWakeUp);

sleepSync(10);
doSomeThingWhenYouWakeUpSync();
```

## LICENSE

MIT
