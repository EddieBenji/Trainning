/**
 * Created by lalo on 13/09/16.
 */
//
// function mixin(source, target) {
//   for (var key in source) {
//     console.log('Key found: ' + key);
//     if (!(key in target)) {
//       target[key] = source[key];
//     }
//   }
//   return target;
// }
//
// var Vehicle = {
//   engines: 1,
//   ignition: function () {
//     console.log('Turning on my engine');
//   },
//   drive: function () {
//     this.ignition();
//     console.log('Steering and moving forward!')
//   }
// };
//
// var Car = mixin(Vehicle, {
//   wheels: 4,
//   drive: function () {
//     // usamos call para asegurar la referencia this se refiera a Car
//     //Vehicle.drive.call(this);
//     Vehicle.drive();
//     console.log("Rolling on all " + this.wheels + " wheels!");
//   }
// });
//
// Car.drive();

//////////////////////////////////
console.log('----------------------------------------------------------------------');
console.log('----------------------------------------------------------------------');


// "Traditional JS Class" `Vehicle`
function Vehicle() {
  this.engines = 1;
}
Vehicle.prototype.ignition = function () {
  console.log("Turning on my engine.");
};
Vehicle.prototype.drive = function () {
  this.ignition();
  console.log("Steering and moving forward!");
};
// "Parasitic Class" `Car`
function Car() {
  // first, `car` is a `Vehicle`
  var car = new Vehicle();
  // now, let's modify our `car` to specialize it
  car.wheels = 4;
  // save a privileged reference to `Vehicle::drive()`
  var vehDrive = car.drive;
  // override `Vehicle::drive()`
  car.drive = function () {
    vehDrive.call(this);
    console.log("Rolling on all " + this.wheels + " wheels!");
    console.log('Engines is: ' + car.engines);
  };
  return car;
}
var myCar = new Car();
myCar.drive();
// Turning on my engine.
// Steering and moving forward!
// Rolling on all 4 wheels!