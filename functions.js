
function add(Addarray){
    Addarray = [];
    var result = 0;
    for(var n = 0;Addarray.length < n; n += 1 ){
        result += Addarray[n];
    };
    return result;
}

var AddMyArray = function () {  
      var i, sum = 0;  
      for (i = 0; i < arguments.length; i += 1){
           sum += arguments[i];   
        } 
      return sum;
     }

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}

function div(a, b){
    return a/b;
}
console.log(add(3,4,3,4,45,5));
console.log(AddMyArray(3,4,3,4,45,5));
