// Generating a Random number using Math.random()
//  Math.random() returns a floating-point, pseudo-random number in the range from 0 (inclusive) to 1 (exclusive). 

let x = Math.random(); // x will be a random number between 0 and 1
console.log( "Before Calculation " +    x); // Output the random number

// get  a random number between a specific range
// we can use the formula: Math.random() * (max - min) + min
// x = x* (1000 - 1) + 1 ;
//  // x will be a random number between 1 and 10


// to Generate A  four digit OTP we Can use the following formula
x  = x *  10000; // x will be a random number between 0 and 10000 

console.log( "After Calculation " + x); // Output the random number between 1 and 1000



// To generate a random integer between two values, we can use Math.floor() in combination with Math.random().
// get a random integer between a specific range
// we can use the formula: Math.floor(Math.random() * (max - min + 1)) + min
console.log("Random Integer " + Math.floor(x))// Output a random integer between 1 and 1000

