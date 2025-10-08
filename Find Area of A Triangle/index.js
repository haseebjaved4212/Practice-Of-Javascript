// programm to find right angle triangle

// general Fomula:  "(base * height) / 2"

// we wil take the Base and Height measurmentfrom the User And will caculate the Area of the  right angled triangle
 
let base = prompt("Enter the base of the triangle: ");
let height = prompt("Enter the height of the triangle: ");
let area1 = (base * height) / 2;
console.log("The area of the triangle is: " + area1 + "' meanwhile the base is: " + base + " and height is: " + height);    


// // Program to find Regular Triangle
// If we know the all sides of a triangle, we can find the area using "Heron's fomula"  

// General fomula: "s = (a + b + c) / 2"
    //  After this we will put the value of s into fomula of Area which is: Square root of  S(s - a )* (s - b ) * (s - c );

let a = 10;
let b  = 10;
let c = 10;
let s = (a + b + c )/2; /*  output: 15, Now  we will put area's fomula */
 let temp = s * (s - a) * (s - b) * (s - c); //  output: 0
 let area2 = Math.sqrt(temp); // output: 1875

console.log("Area of the triangle is: " + area2); 
