function leftTriangle(){
  let rows = parseInt(document.querySelector("#n").value);

  let result = '';
  for (let i = 1; i <= rows; i++) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "<br/>";
  }
  document.getElementById("triangle").innerHTML = result;  
}
  
