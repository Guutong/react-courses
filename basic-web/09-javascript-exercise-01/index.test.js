import {
  colorDescription,
  greaterNum,
  sum,
  greeting,
  isOdd,
  calculateGrade,
} from './index';

test('sum', () => {
  expect(sum(1, 3)).toBe(4);
});

test('greeting', () => {
  const result = greeting('Benjamin');

  expect(result).toBe('Hi Benjamin!');
});

test('isOdd', () => {
  expect(isOdd(3)).toBe(true);
  expect(isOdd(2)).toBe(false);
});

test('calculateGrade', () => {
  expect(calculateGrade(80)).toBe('A');
  expect(calculateGrade(70)).toBe('B');
  expect(calculateGrade(60)).toBe('C');
  expect(calculateGrade(50)).toBe('D');
  expect(calculateGrade(49)).toBe('F');
});

test('greaterNum', () => {
  expect(greaterNum(3, 5)).toBe(5);
  expect(greaterNum(-1, 200)).toBe(200);
});

test('get color description', () => {
  expect(colorDescription('red')).toBe('Red is the color of love.');
  expect(colorDescription('orange')).toBe('Orange is the color of oranges');
  expect(colorDescription('mango')).toBe('mango is not in color option');
});
