// ____TYPES___
// boolean
var isOpen = false;
// string
var name = "youssef";
// number
var age = 25;
// Array
// def array using just numbers
//let numbers: number[] = [1, 2, 3, 4, 5];
var numbers = [1, 2, 3, 4, 5];
// def array using just string
//let names: string[] = ["first", "last", "do"];
var names = ["first", "blabla", "some"];
// def array have tyep number and string
var data = [1, 2, "fisrt", "some"];
var Color;
(function(Color) {
  Color[(Color["Red"] = 0)] = "Red";
  Color[(Color["Green"] = 1)] = "Green";
  Color[(Color["Blue"] = 2)] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

console.log(c);
