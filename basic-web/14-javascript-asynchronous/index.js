// Callback

// Synchronous ===========================
function restaurantLongtime1(order) {
  // take more time
  return 'food : ' + order;
}
// queue 1
const foodForPerson1 = restaurantLongtime1('Pizza');
// queue 2
const foodForPerson2 = restaurantLongtime1('Noodle');
// queue 3
const foodForPerson3 = restaurantLongtime1('KFC');
// =======================================

// Asynchronous ===========================
function restaurantLongtime2(order, phoneNo, callback) {
  // take more time
  callback(phoneNo + ' food : ' + order);
}
restaurantLongtime2('Pizza', function (food) {
  // food for person1
  console.log(food);
});
restaurantLongtime2('Noodle', function (food) {
  // food for person1
  console.log(food);
});
restaurantLongtime2('KFC', function (food) {
  // food for person1
  console.log(food);
});

// =======================================

// Call stack
const task1 = () => {
  console.log('task1');
};

const task2 = () => {
  task1();
  console.log('task2');
};

task2();

// event loop
function greet() {
  return 'Hello!';
}

function respond() {
  return setTimeout(() => {
    return 'Hey!';
  }, 1000);
}

greet();
respond();
