
var firstName = "Chinmay";
console.log("firstName");
console.log(firstName);


// Numbers Strings Boolean null Undefined 
// Numbers --> Interger  , Decimal , Float 

// Boolean --> true or false 

// null 

// Strings

// Undefined 

var isMarried = false;
console.log(isMarried)

if(isMarried){
    console.log("John is Married");
}else{
    console.log("John is not Married")
}


// Type coersion 

// let name = null ;
// console.log(name);
// name = "chinmay";
// console.log(name);


var name = "chinmay";
var age = 29 ;
console.log(age + 78 + name);
console.log(name + (age + 78));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// Basics 

console.log(7+8);
console.log(7-8);
console.log(7*8);
console.log(7/8);
console.log(7%8);
console.log(7 > 8);
console.log(7 < 8);






























///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









