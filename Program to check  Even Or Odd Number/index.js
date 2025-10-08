//  Programm to check id=f the Number is Even or Odd
//  We have Multiple  methods to check if a number is even or odd
// 1. 

let x = prompt ("Enter a number: ");
if (x%2==0) {
    console.log(`${x} is an Even number`);
  
}else{
    console.log(`${x} is an Odd number`);
};

// 2. Using the ternary operator
let y = prompt ("Enter a number: ");
let result = (y % 2 === 0) ? `${y} is an Even number` : `${y} is an Odd number`;
console.log(result);


