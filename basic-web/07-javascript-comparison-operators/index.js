// Comparison operators
// ==: the equal operator, used to check if two values are equal.
// !=: the not equal operator, used to check if two values are not equal.
// ===: the strict equal operator, used to check if two values are equal and of the same type.
// !==: the strict not equal operator, used to check if two values are not equal or are not of the same type.
// >: the greater than operator, used to check if one value is greater than another.
// <: the less than operator, used to check if one value is less than another.
// >=: the greater than or equal to operator, used to check if one value is greater than or equal to another.
// <=: the less than or equal to operator, used to check if one value is less than or equal to another.

let x = 4;
let y = 2;
let z = '4';
console.log(x == y); // false
console.log(x != y); // true
console.log(x === y); // false
console.log(x !== y); // true
console.log(x > y); // true
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // false
console.log(y == z); // true

// 0 == "0" - true
// 0 == [] - true
// "0" == [] - false

// **remark comparison in js, might not same as we think
