// test code
// let mo = new GameObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   width: 100,
//   height: 3,
//   color: "white",
// });

function GameObject(options) {
  this.pos = options.pos; // ex. [30, 30]
  this.vel = options.vel; // ex. [10, 10]
  this.rad = options.rad
  this.width = options.width; // ex. 5
  this.height = options.height; // ex. 5
  this.color = options.color // ex. "#00FF00"
}

GameObject.prototype.drawRec = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.rect(this.pos[0], this.pos[1], this.width, this.height);

  ctx.fill();
};

GameObject.prototype.drawCir = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2*Math.PI, false);

  ctx.fill();
};

GameObject.prototype.move = function(ctx) {
  let newPos = [];
  newPos.push(this.pos[0] + this.vel[0]);
  newPos.push(this.pos[1] + this.vel[1]);
  this.pos = newPos;
}

module.exports = GameObject;