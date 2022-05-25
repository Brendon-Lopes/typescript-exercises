let x;
if (typeof x === "undefined") x = 20;

function person(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

function squareOf(x: any) {
  // x of type unknown would not return any warnings
  if (typeof x === "number") return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf("2");

console.log(squareOfTwoNumber, squareOfTwoString);

export { person };
