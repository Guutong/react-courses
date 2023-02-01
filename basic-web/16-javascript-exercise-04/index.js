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
