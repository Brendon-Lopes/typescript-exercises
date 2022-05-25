// when a function 'never' returns any value
// examples:
// When the function returns an error or infinite loops

function createError(): never {
  throw new Error("Any error");
}

createError();
