// add types possibilities to a variable

// function add(a: number, b: number): number {
//   return a + b;
// }

const sum = (a: number, b: number): number => {
  return a + b;
};

const sumOrConcat = (
  a: number | string,
  b: number | string
): number | string => {
  if (typeof a === "number" && typeof b === "number") return a + b;
  return `${a}${b}`;
};

console.log(sum(10, 20));
console.log(sumOrConcat(10, 20));
console.log(sumOrConcat("10", 20));
console.log(sumOrConcat("10", "20"));

export {};
