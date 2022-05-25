// enum Colors {
//   RED, // 0
//   BLUE, // 1
//   YELLOW, // 2
// }

enum Colors {
  RED = 10, // can attribute your own "index" to each value
  BLUE = 100,
  YELLOW = 200,
  PURPLE,
  PINK = "PINK",
}

console.log(Colors.RED); // 10
console.log(Colors[10]); // RED

function chooseColor(color: Colors): void {
  console.log(Colors[color]);
}

chooseColor(Colors.BLUE);
