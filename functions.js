//functions discussion
function f1(){
    f2();
    alert("you called f1");
}
function f2(){
    alert("your called f2");
}

//function invocation
    //the this key word
var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
myObject.fullName();  

function myDoc(){
    return this;
}

// number of parameters to be passed
// when theyu are less
function add(a,b){
    return a+b;
}

//storing a function as a property of an object
//when a function is stored as a property of an object, it is called a method
// this is bound to the object
var myObject = {
value: 0,
increment: function (inc) {
this.value += typeof inc === 'number' ? inc : 1;
}
};
myObject.increment( );
document.writeln(myObject.value); // 1
myObject.increment(2);
document.writeln(myObject.value); // 3

// function invocation pattern
// Augment myObject with a double method.
myObject.double = function ( ) {
var that = this; // Workaround.
var helper = function ( ) {
that.value = add(that.value, that.value);
};
helper( ); // Invoke helper as a function.
return this.that;
};
// Invoke double as a method.

myObject.double( );

// the constructoe invacation pattern using the new prifix

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
this.status = string;
};
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function ( ) {
return this.status;
};
// Make an instance of Quo.
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status( )); // confused

// the apply invocation pattern
//object-oriented language, functions can have methods.




///Arguments

var sum = function ( ) {
var i, sum = 0;
for (i = 0; i < arguments.length; i += 1) {
sum += arguments[i];
}
return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108




//return 
// exceptions

var add = function (a, b) { 
if (typeof a !== 'number' || typeof b !== 'number') {
throw {
name: 'TypeError',
message: 'add needs numbers'
};
}
return a + b;
}
