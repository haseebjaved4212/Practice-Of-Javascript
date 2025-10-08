// there are multiple ways to swap two numbers in JavaScript.

// 1.    Swapping two numbers using a temporary variable;


let a = 5;

let b = 6;
temp = a;
a = b;
b = temp;
console.log("a: " + a);
console.log("b: " + b); 

// 2. Swapping two numbers without using a temporary variable;
let x = parseInt(prompt("please enter first number"));
let y = parseInt(prompt("please enter second number"));
x = x + y;  
y = x - y;   
x = x - y;
console.log("x: " + x );
console.log("y: " + y);