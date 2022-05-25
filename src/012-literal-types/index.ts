let x = 10;
x = 0b1010;

const y = 10; // literal type

// let a: 100 = 100; // literal type, this variable can only be 100.
// let a = 100 as const; // let reattributed to const

const person = {
  name: "Alan" as const,
  lastName: "Turing",
};

// person.name = "another"
// cannot change the name as it is a constant.

const chooseColor = (color: "Red" | "Yellow" | "Blue"): string => {
  return color;
};
// the function only accept the subtypes declared.

console.log(x, y, person);
// console.log(chooseColor("Green")); // error from typescript
// but still works /\

console.log(chooseColor("Red"));

export {};
