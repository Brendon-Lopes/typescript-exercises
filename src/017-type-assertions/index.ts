/* RECOMENDED */
const body = document.querySelector("body");
// body is initialy HTMLBodyElement or NULL
if (body) body.style.background = "red";
// Without the condition, ts alerts that the...
// ...object is possibly null and gives an error.

// Type assertion
const body3 = document.querySelector("body") as HTMLBodyElement;
// removes the possible "null" that typescript infers.
body3.style.background = "red";

// HTMLElement
const input = document.querySelector(".input") as HTMLInputElement;
input.value = "some value";
input.focus();

/* NOT RECOMENDED */
// Type assertion
const body4 = document.querySelector("body") as unknown as number;

// non-null assertion (forbidden)
const body2 = document.querySelector("body")!;
body2.style.background = "red";
