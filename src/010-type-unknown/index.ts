let x: unknown;

x = 100;
x = "name";
x = 900;
const y = 800;

// necessary to check the type, since it's unknown
if (typeof x === "number") console.log(x + y);
