
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}

var p1 = new person("Kyle", 30, "green");
var p2 = new person("Amy", 31, "blue");

print(p1.name);
print(p2.favColor);
