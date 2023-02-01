export function sum(n1, n2) {
  return n1 + n2;
}
export function greeting(name) {
  return 'Hi ' + name + '!';
}

export function isOdd(num) {
  // if (num % 2 === 0) {
  //   return false;
  // }
  // return true;

  // return num % 2 !== 0;
  return num % 2 === 0 ? false : true;
}

export function calculateGrade(point) {
  if (point >= 80) return 'A';
  if (point >= 70) return 'B';
  if (point >= 60) return 'C';
  if (point >= 50) return 'D';
  return 'F';
}

export function greaterNum(n1, n2) {
  return n1 > n2 ? n1 : n2;
}
