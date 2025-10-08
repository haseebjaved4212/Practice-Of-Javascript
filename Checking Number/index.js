function check(){
  let value = document.getElementById("numberInput").value;
  // let result = Math.sign(value);
if (value > 0) {
    result = `${value} is a Positive Number`;
  }
  else if (value < 0) {
    result = `${value} is a Negative Number`;
  }
  else if (value == 0) {
    result = `${value} is a Zero`;
  }
  else {
    result = `${value} is not a Number`;
  };

  document.getElementById("result").innerHTML = result;
};
