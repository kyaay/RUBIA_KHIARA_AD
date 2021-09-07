var h = 6; //height
var triangle = "";

for (var i = 0; i < h; i++) {
    for (var c = 0; c < i; c++) {
        triangle += "* ";
    }
    triangle += "\n";
}
console.log(triangle);