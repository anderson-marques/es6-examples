'use strict';

// Arrow functions simplifies function declaration.
// this object is the same where this function is called

var getPI = ()=> 3.1415;

console.log(getPI());

this.pi = getPI();

// Arrow function declaration with params
var add = (a,b) => {
  return a, b;
}

console.log(add(3,4));

// Arrow function this

var invoice = {
  number : 123,
  process : function(){
    console.log(this); // This refers to invoice object
  }
}

invoice.process(); //

var invoice2 = {
  number : 123,
  process : () => {
    console.log(this); // This refers to outside object. this.pi will shows up.
  }
}
invoice2.process();
