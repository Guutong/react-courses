const eventButton = document.getElementById('event-button');
const textArea = document.getElementById('text-area');

// it is an array that will be used as a queue to store events that need to be processed.
let queue = [];

eventButton.addEventListener('click', function () {
  // it pushes a message "Event" to the queue.
  queue.push('Event');
});

function simulateEventLoop() {
  // it checks if there are any items in the queue array
  if (queue.length) {
    // if there are items in the queue, it pops the first item off the queue and appends a message Processing task to the text area
    let task = queue.shift();
    textArea.value += `Processing ${task}\n`;
  } else {
    // if there are no items in the queue, it pushes message 'Tick' to the queue,
    queue.push('Tick');
  }
}

// call the function with setInterval, which repeat the function call
setInterval(simulateEventLoop, 500);
