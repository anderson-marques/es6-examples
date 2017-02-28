'use strict';

/*
Well know symbols allow to personalise how we see the toString of
an object. 
*/

let MyType = function(){};

MyType.prototype[Symbol.toStringTag] = 'MyType class';

let myObj = new MyType();

console.log(myObj.toString()); 
// Will print [object MyType class] instead of object Object
