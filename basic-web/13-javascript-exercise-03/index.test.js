import {
  squareNumbers,
  countDown,
  countStringList,
  getSpecificPropInList,
  countWord,
  isPrime,
} from './index';

test('use for-loop convert array of number to square', () => {
  expect(squareNumbers([2, 5, 7, 10])).toEqual([4, 25, 49, 100]);
});

test('use while-loop count down n to 1', () => {
  expect(countDown(5)).toEqual([5, 4, 3, 2, 1]);
  expect(countDown(0)).toEqual([]);
  expect(countDown(-1)).toEqual([]);
});

test('use for-loop counter chars in each string', () => {
  expect(countStringList(['hello', 'cat', 'meow'])).toEqual([5, 3, 4]);
});

test('use for-loop get specify property in each object', () => {
  expect(
    getSpecificPropInList(
      [
        { name: 'michael', age: 43 },
        { name: 'pinpin', age: 29 },
      ],
      'name'
    )
  ).toEqual(['michael', 'pinpin']);
  expect(
    getSpecificPropInList(
      [
        { name: 'michael', age: 43 },
        { name: 'pinpin', age: 29 },
      ],
      'age'
    )
  ).toEqual([43, 29]);
});

test('counting word in array of strings', () => {
  expect(countWord(['cat', 'dog', 'wolf', 'cat', 'cat'])).toEqual({
    cat: 3,
    dog: 1,
    wolf: 1,
  });
});

test('isPrimeNumber', () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(79)).toBe(true);
});

test('isPalindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('radar')).toBe(true);
  expect(isPalindrome('popup')).toBe(false);
});
