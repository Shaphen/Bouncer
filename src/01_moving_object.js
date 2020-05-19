// test code
// let mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   width: 100,
//   height: 5,
//   color: "black",
// });

function MovingObject(options) {
  this.pos = options.pos; // ex. [30, 30]
  this.vel = options.vel; // ex. [10, 10]
  this.width = options.width; // ex. 5
  this.height = options.height; // ex. 5
  this.color = options.color // ex. "#00FF00"
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color
  ctx.beginPath();

  ctx.rect(
    this.pos[0],
    this.pos[1],
    this.width,
    this.height
  );

  ctx.fill();
}

module.exports = MovingObject;