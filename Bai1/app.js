function isPrime(n){
    if(n==1){
      return false;
    }
    for(var i=2; i*i<=n; i++){
      if(n%i===0){
        return false;
      }
    }
    return true;
  }
function calc() {
    var a = parseInt(document.querySelector("#a").value);
    var b = parseInt(document.querySelector("#b").value);
    var sum=0;
    for(var i=b; i>=a; i--){
        var prime = isPrime(i);
        if(prime){
            sum=sum+i;
        }
    sum=sum;
    }
    document.getElementById("result").innerHTML=sum;
}
  
   
  