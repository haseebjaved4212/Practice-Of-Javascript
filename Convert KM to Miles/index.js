 function convert(){
  let km = document.getElementById("km").value;
    const factor = 0.621371;
    let miles = km * factor;
    document.getElementById("result").innerText = miles + " miles";
 }
