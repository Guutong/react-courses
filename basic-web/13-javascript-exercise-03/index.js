// Exercises
// Write a for loop that iterates over an array of numbers and logs the square of each number to the console.
// Write a while loop that counts down from 10 to 1 and logs the count to the console.
// Write a for loop that iterates over an array of strings and logs the number of characters in each string to the console.
// Write a for loop that iterates over an array of objects and logs a specific property of each object to the console.
// Counting word in array of strings
// Write the function check the number is prime number
// Write the function check the string is palindrome

export function squareNumbers(numList) {
  let result = [];
  // for (let i = 0; i < numList.length; i++) {
  //   result.push(numList[i] * numList[i]);
  // }
  // return result;

  result = numList.map((n) => n * n);
  return result;
}

export function countDown(starter) {
  let result = [];
  if (starter <= 0) {
    return result;
  }

  while (starter > 0) {
    result.push(starter);
    starter--;
  }
  return result;
}

export function countStringList(stringList) {
  let result = [];
  // for (let i = 0; i < stringList.length; i++) {
  //   result.push(stringList[i].length)
  // }
  result = stringList.map((str) => str.length);
  return result;
}

export function getSpecificPropInList(arr, field) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][field]);
  }
  // result = arr.map((item) => item[field]);
  return result;
}

export function countWord(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (result[key] > 0) {
      let value = result[key];
      result[key] = value + 1;
      // { cat: 2, ...}
    } else {
      result[key] = 1;
      // { cat: 1}
      //  { cat:1, dog: 1, wolf: 1}
    }
  }
  return result;
}

export function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

export function isPalindrome(str) {
  // let i = 0;
  // let j = str.length - 1;
  // while (i < j) {
  //   console.log(str[i], str[j]);
  //   if (str[i] !== str[j]) return false;
  //   i++;
  //   j--;
  // }
  // return true;
  return str.split('').reverse().join('') === str;
}
