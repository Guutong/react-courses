function myFunction1() {
  var z = 3 + 4; // globally scoped or function scoped
  let x = "world"; // block scoped, updated but not re-declared
  const y = 42; // block scoped, cannot updated or re-declared
  x = "abc";
  if (true) {
    var z = 4 + 9;
    let h = 8;
    let x = "hello";
    // console.log(z);
  }

  console.log(z);
}
myFunction1();

// function myFunction2() {
//   var x = 1;
//   let y = 2;
//   if (true) {
//     var x = 3;
//     let y = 4;
//     console.log(x); // 3
//     console.log(y); // 4
//   }
//   console.log(x); // 3
//   console.log(y); // 2
// }

