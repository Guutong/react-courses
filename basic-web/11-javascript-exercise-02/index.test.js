const color = 'red';

export function colorDescription(color) {
  let description = '';
  switch (color) {
    case 'red':
      description = 'Red is the color of love.';
      break;
    case 'orange':
      description = 'Orange is the color of oranges';
      break;
    default:
      description = color + ' is not in color option';
  }
  return description;
}
