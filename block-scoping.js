'use strict';

/**
Now in ES6 we can have variables that exists only inside a block
*/

let name = 'anderson';

{
  let age = 33;
  console.log('My name is ' + name + ' and I have ' + age);
}

console.log('My name is ' + name + ' and I don not know my age!');
