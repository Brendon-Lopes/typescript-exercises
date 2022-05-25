type Age = number;

// type StringArray = Array<string>;
// creating my own type /\

type Person = {
  name: string;
  age: Age;
  salary: number;
  favoriteColor?: string;
};

type RGB = "Red" | "Green" | "Blue";
type CMYK = "Cyan" | "Magenta" | "Yellow" | "Black";
type FavoriteColor = RGB | CMYK;

const person: Person = {
  age: 24,
  name: "Name",
  salary: 200_000,
};

const setFavoriteColor = (person: Person, color: FavoriteColor): Person => {
  return { ...person, favoriteColor: color };
};

console.log(setFavoriteColor(person, "Blue"));

export {};
