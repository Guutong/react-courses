// Promises are an abstraction for asynchronous control flow — they're a proxy object for a value that may not exist yet. A Promise is always in 1 of 3 states internally:
// ✅ fulfilled: The promise has been resolved. Everything went fine, no errors occurred within the promise 🥳
// ❌ rejected : The promise has been rejected. Argh, something went wrong..
// ⏳ pending: The promise has neither resolved nor rejected (yet), the promise is still pending.
// A resolved or rejected promise optionally contains a value.
// Every promise starts in the pending state, and can only transition once (i.e. a resolved promise never becomes rejected later).

// Create promise
const resolvedPromise = Promise.resolve(42);

resolvedPromise.then((value) => {
  console.log(value);
});

const rejectedPromise = Promise.reject('Some problem');

rejectedPromise.catch((value) => {
  console.log(value);
});

const functionPromise = new Promise((resolve, reject) => {
  resolve('Hello');
});

functionPromise
  .then((value) => {
    console.log('Resolved', value);
  })
  .catch((value) => {
    console.log('Rejected', value);
  });

// Chaining Promise
Promise.resolve(42)
  .then((value) => value * 2)
  .then((value) => Promise.resolve(value + 1000))
  .then((value) => {
    console.log(value);
  });

Promise.resolve(42)
  .then((value) => value * 2)
  .then((value) => Promise.reject(value))
  .then((value) => Promise.resolve(value + 1000))
  .catch((value) => {
    console.log('Caught!', value);
    return value;
  })
  .then((value) => value * 2)
  .then((value) => {
    console.log('OK', value);
  });

// handle promise
function sleep(delay, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), delay);
  });
}

sleep(3000, 'Devin').then((value) => {
  console.log(`Hello ${value}`);
});

const promiseA = sleep(3000, 'a');
const promiseB = sleep(1000, 'b');
const promiseC = sleep(2000, 'c');

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log(values);
});

Promise.race([promiseA, promiseB, promiseC]).then((value) => {
  console.log(value);
});
