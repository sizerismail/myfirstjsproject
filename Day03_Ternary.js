/*Ternary*/

console.clear();

var x = 5, y=6;

x>y ? console.log("x is greater than y") : console.log("x is NOT greater than y");

const isExpensive = x>4 ? "Expensive" : "Cheap";

console.log(isExpensive);

const result = x>4 ? (y<4 ? "Logic 1" : "Logic 2") : "Logic 3";

console.log(result);