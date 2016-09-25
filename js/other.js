/**
 * Created by lalo on 13/09/16.
 */
// function stealthCheck() {
//
//   if (stealth()) {
//     console.log("We'll never get below the return, but that's OK!");
//   }
//   return stealth();
//
//   function stealth() {
//     return true;
//   }
// }
//
// stealthCheck();
// console.log('----------------------------------------------------------------------------');
// console.log('----------------------------------------------------------------------------');
//
// function assert(value, text) {
//   if (value) {
//     console.log(text);
//     return;
//   }
//   console.log('something is wrong, message: ' + text);
// }
// var ninja = function myNinja() {
//   assert(ninja == myNinja, "This function is named two things - at once!");
// };
// ninja();
// assert(typeof myNinja == "undefined", "But myNinja isn't defined outside of the function.");
// console.log(ninja);
// console.log('----------------------------------------------------------------------------');
// console.log('----------------------------------------------------------------------------');
//
// function Hello(color) {
//   this.color = color;
// }
//
//
// var colorVar = new Hello('red');
// console.log(colorVar.color);
// //console.log(color);//Here is undefined.
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
function isIntegerCustomized(x) {
  return (typeof x === 'number' && x % 1 === 0);
}
console.log(isIntegerCustomized(2));

console.log(isIntegerCustomized(2.4));
console.log(isIntegerCustomized(null));
// return (x ^ 0) === x;
console.log('----------------------------------------------------------------------------');
console.log('----------------------------------------------------------------------------');
function sum(x) {
  if (arguments.length == 2) {
    return x + arguments[1];
  } else {
    return function (y) {
      return x + y;
    };
  }
}

console.log(sum(4, 3));
console.log(sum(4)(3));