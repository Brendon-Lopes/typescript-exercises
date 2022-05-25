// enum Colors {
//   RED, // 0
//   BLUE, // 1
//   YELLOW, // 2
// }
var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 10] = "RED";
    Colors[Colors["BLUE"] = 100] = "BLUE";
    Colors[Colors["YELLOW"] = 200] = "YELLOW";
    Colors[Colors["PURPLE"] = 201] = "PURPLE";
    Colors["PINK"] = "PINK";
})(Colors || (Colors = {}));
console.log(Colors.RED); // 10
console.log(Colors[10]); // RED
function chooseColor(color) {
    console.log(Colors[color]);
}
chooseColor(Colors.BLUE);
