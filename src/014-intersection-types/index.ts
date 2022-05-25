type HasName = { name: string };
type HasLastname = { lastname: string };
type HasAge = { age: number };

// this would be union types
// type Person = HasName | HasLastname | HasAge;

// this is intersection types
type Person = HasName & HasLastname & HasAge;

const person: Person = {
  name: "Alan",
  lastname: "Turing",
  age: 24,
};

console.log(person);

// --------------------------- //

// Obs.: May not be very useful \/

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "D" | "A";
type Intersection = AB & AC & AD;
// Intersection is "A". The only value in common.

export { Intersection }; // exporting to avoid warnings/errors.
