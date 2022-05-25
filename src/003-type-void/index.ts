// function with no return, has return of type void.

function noReturn(...args: string[]): void {
  console.log(args.join(" "));
}

noReturn("test", "xablau");

const person = {
  name: "Brendon",
  lastname: "Lopes",

  showName(): void {
    console.log(`${this.name} ${this.lastname}`);
  },
};

person.showName();

export {};
