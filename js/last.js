/**
 * Created by lalo on 27/09/16.
 */

'use strict';

var MyFunc = function () {
};

MyFunc.prototype.newOne = function () {
  console.log('HEY, im new one');
};

var hi = new MyFunc;
hi.newOne();//<-------------it's better like this


function mul(first) {
  return function (second) {
    return function (third) {
      return third * second * first;
    };
  };
}

console.log(mul(2)(3)(4));

var globalVar = 'global';

function OuterFunction() {
  var secondVar = 'second';

  this.myFunc = function () {
    var localVar = 'local | third';
    console.log(globalVar);
    console.log(secondVar);
    console.log(localVar);
  }
}

var outer = new OuterFunction;
outer.myFunc();