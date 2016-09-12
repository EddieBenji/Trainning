/**
 *
 * Created by lalo on 11/09/16.
 */

// "use strict";
function eqNumber(n1, n2) {
  if (!Number.EPSILON) {
    Number.EPSILON = Math.pow(2, -52);
  }
  return Math.abs(n1 - n2) < Number.EPSILON;
}

function test() {

  var array = [1, 2, 3, 'banana'];
  // array[0] = 1;
  // array['foo'] = 'hola';
  // alert('Length of array: ' + array.length);
  // alert(array.foo);

  array.splice(1, 0, 'apple');
  console.log('length: ' + array);
  console.log('Length of array: ' + array.length);

  var b = 2e2;
  console.log('Value of b: ' + b);
  console.log('Value of b to exponential: ' + b.toExponential());

  console.log('.1+.2===.3 ?' + eqNumber(.1 + .2, .3));

  var a = 2 / 2;
  console.log('A equals to: ' + a);
  console.log('Type of a: ' + typeof a);
  console.log('Is not a number: ' + isNaN(a));

  var myvar;
  if (typeof myvar !== 'undefined') {
    console.log('Var is defined!  ' + myvar);
  } else {
    console.log('Var is not defined!');
  }

  var c = [1, 2, 3];
  var arrayCopy = c;
  arrayCopy.push(4);
  console.log('Array has now: ' + arrayCopy);
  console.log('Type of array: ' + typeof array);

  changeArrayValues(arrayCopy);
  console.log('Array has now: ' + c);
  console.log('Length of array: ' + c.length);

  console.log('Conversion of an undefined variable to boolean: ' + new Boolean(myvar));

}

function changeArrayValues(array) {
  //array = [0];
  array.push('hi');
}


// var a = 2;
// // (function foo() {
// //   var a = 3;
// //   console.log ( a ); // 3
// // })();
// var f = function(){
//   var a = 3;
//   console.log ( a ); // 3
//
// };
// f();
// console.log( a );// 2

// var a = 2;
// (function IIFE(global) {
//   var a = 3;
//   console.log(a); // 3
//   console.log(global.a); // 2
//   //global.test();
// })(window);//pass all the variables:
// console.log(a); // 2


//using binding:

function myEvent(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 2
};

var bar = myEvent.bind(obj);
console.log(bar(8));





