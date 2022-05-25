const clientData: [number, string] = [1, "name"];
const clientData2: [number, string, string?] = [1, "name"];
const clientData3: [number, ...string[]] = [1, "name", "lastname"];

clientData[0] = 100;
clientData[1] = "lastname";
// clientData.pop();
// typescript doesn't return errors with the pop above.
// if array should be inmutable use readonly.

console.log(clientData);
console.log(clientData2);
console.log(clientData3);

//readonly
const array1: readonly string[] = ["name", "lastname"];
const array2: ReadonlyArray<string> = ["name", "lastname"];

// array1.pop();
// now trying to "pop" returns an error.

console.log(array1);
console.log(array2);
