// Exercise
// If the string is 'red', return 'Red is the color of love.'
// If the string is 'orange', return 'Orange is the color of oranges.'
// If the string is 'yellow', return 'Yellow is the color of the sun.'
// If the string is 'green', return 'Green is the color of nature.'
// If the string is 'blue', return 'Blue is the color of the sky.'
// If the string is 'indigo', return 'Indigo is a deep blue color.'
// If the string is 'violet', return 'Violet is a purple color.'

function colorDescription(color) {
  let text = 'No color';
  switch (x) {
    case 'red':
      text = 'Red is the color of love.';
      break;
    case 'orange':
      text = 'Orange is the color of oranges.';
      break;
    case 'yellow':
      text = 'Yellow is the color of the sun.';
      break;
    case 'green':
      text = 'Green is the color of nature.';
      break;
    case 'blue':
      text = 'Blue is the color of the sky.';
      break;
    case 'indigo':
      text = 'Indigo is a deep blue color.';
      break;
    case 'violet':
      text = 'Violet is a purple color.';
      break;
    default:
      text = 'No color';
  }
  return text;
}

const description = colorDescription('violet');
console.log(description);
