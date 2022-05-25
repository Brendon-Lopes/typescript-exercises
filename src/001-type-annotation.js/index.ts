/* eslint-disable */

// ocorre inferência de tipos, lint removeria o tipo.
// tipar quando o código não conseguir inferir o valor
// quando retornar "any"
let name: string = "Teste";
let age: number = 24;
let adult: boolean = true;
let symbol: symbol = Symbol("qualquer-symbol");
// let big: bigint = 10n;

// Arrays
const numbersArray: Array<number> = [1, 2, 3];
const numbersArray2: number[] = [1, 2, 3];
const stringsArray: Array<string> = ["a", "b"];
const stringsArray2: string[] = ["a", "b"];

// Objetos
const person: { name: string; age: number; adult?: boolean } = {
  name: "teste",
  age: 25,
};

// Funções
function sum(x: number, y: number): number {
  return x + y;
}

// outra forma de função
const sum2: (x: number, y: number) => number = (x, y) => x + y;

export {};
