const objectA: {
  readonly keyA: string; // cannot change keyA value with readonly.
  keyB: string;
  keyC?: string;
  [key: string]: unknown; // opens the object to add more keys.
} = {
  keyA: "Value A",
  keyB: "Value B",
};

objectA.keyC = "New Key";
objectA.keyD = "New Key";

console.log(objectA);
