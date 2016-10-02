/**
 * Created by lalo on 2/10/16.
 */
x = 9;
var module = {
  x: 81,
  getX: function () {
    return this.x;
  }
};

console.log(module.getX()); // 81

var retrieveX = module.getX;
console.log(retrieveX());

var boundGetX = retrieveX.bind(module);
console.log(boundGetX());

/////////////////////////////
function list() {
  return Array.prototype.slice.call(arguments);
}

var mylist = list(1, 2, 3);
var firstList = list.bind(undefined, 37);
var secondList = firstList();
console.log(secondList);

var lastList = firstList(1, 2, 3);
console.log(lastList);

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
  array[index] = 'hi';
  console.log(array);
}

[2, 5, , 9].forEach(logArrayElements);


