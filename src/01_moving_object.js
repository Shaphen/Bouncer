// test code
// let mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   length: 10,
//   rad: 5,
//   color: "#00FF00",
// });

function MovingObject(options) {
  this.pos = options.pos; // ex. [30, 30]
  this.vel = options.vel; // ex. [10, 10]
  this.length = options.length; // ex. 5
  this.rad = options.rad; // ex. 5
  this.color = options.color // ex. "#00FF00"
}

MovingObject.prototype.draw = (ctx) => {
  
}

module.exports = MovingObject;