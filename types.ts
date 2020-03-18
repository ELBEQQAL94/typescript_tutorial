// ____TYPES___

// boolean
let isOpen: boolean = false;

// string
let name: string = "youssef";

// number
let age: number = 25;

// Array

// def array using just numbers
//let numbers: number[] = [1, 2, 3, 4, 5];
let numbers: Array<number> = [1, 2, 3, 4, 5];

// def array using just string
//let names: string[] = ["first", "last", "do"];
let names: Array<string> = ["first", "blabla", "some"];

// def array have tyep number and string
let data: [number, string] = [1, 2, "fisrt", "some"];

enum Color {
  Red,
  Green,
  Blue
}
let c: Color = Color.Green;
