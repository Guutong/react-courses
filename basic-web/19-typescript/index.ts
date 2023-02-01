// Transpile Ts to Js

// TypeScript sample.ts
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('John')); // 'Hello, John!'

// npm install -g typescript
// tsc index.ts --outFile ./index.js

function add(x: number, y: number): number {
  return x + y;
}

console.log(add(10, 20)); // prints 30
