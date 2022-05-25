// Array<T> or T[]

function multiplyArgs(...args: number[]): number {
  return args.reduce((acc, curr) => acc * curr, 1);
}

console.log(multiplyArgs(1, 2, 3));

function test(...args: Array<number>) {
  return args;
}

console.log(test(1, 2, 3));
