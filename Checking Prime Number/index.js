// Program to check if a number is Prime  or not 



let x = prompt(" Please Enter a number: ");
if (x == 1 ) {
    console.log("1 is neither prime nor composite");
} else if( x < 1 ){
    console.log(`${x} is not a Prime Number`);
} else {
  for (let i = 2 ; i < x; i++) {
   if (x % i == 0) {
    res =  `${x} is not a Prime Number`;
    break;
   }else {
      res =  `${x} is a Prime Number`;
    
   } 
  }
console.log(res);
}

