// function sleep(delay, value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), delay);
//   });
// }

// async function run() {
//   try {
//     const value = await sleep(2000, "hello");
//     const value2 = await sleep(2000, "world");
//     console.log(value, value2);
//   } catch (error) {
//     console.log(error);
//   }
// }

// run();

// Exercise 2
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Here is your data');
      } else {
        reject('Sorry, there was an error');
      }
    }, 2000);
  });
}

function processData(data) {
  return new Promise((resolve) => {
    let processedData = data.toUpperCase();
    resolve(processedData);
  });
}

function processData2(data) {
  console.log(`Data received by processData2: ${data}`);
}

// getData()
//   .then((value) => processData(value))
//   .then((value) => processData2(value))
//   .catch((error) => {
//     console.log(error);
//   });

async function run() {
  try {
    // code here ....
    const value = await getData();
    const processedData = await processData(value);
    processData2(processedData);
  } catch (error) {
    console.log(error);
  }
}

run();
