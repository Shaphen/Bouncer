
function GameObject(options) {
  this.pos = options.pos; // ex. [30, 30]
  this.vel = options.vel; // ex. [10, 10]
  this.rad = options.rad; // ex. 10
  this.width = options.width; // ex. 5
  this.height = options.height; // ex. 5
  this.color = options.color; // ex. "#00FF00"
  this.game = options.game;
}

GameObject.prototype.drawRec = function(ctx) {
  ctx.beginPath();
  ctx.fillStyle = "#DC1C13";
  ctx.shadowColor = "red";
  ctx.shadowBlur = 10

  ctx.rect(this.pos[0], this.pos[1], this.width, this.height);

  ctx.fill();
};

GameObject.prototype.drawPlayer = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.shadowColor = "blue";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.shadowBlur = 10

  ctx.rect(this.pos[0], this.pos[1], this.width, this.height);

  ctx.stroke();
  ctx.fill();
};

// GameObject.prototype.drawCir = function(ctx) {
//   ctx.beginPath();
//   ctx.fillStyle = this.color;
  // ctx.strokeStyle = "blue";
  // ctx.lineWidth = 4;
  // ctx.shadowColor = "blue";
  // ctx.shadowBlur = 10;

//   ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2*Math.PI, false);

//   ctx.stroke();
// };

GameObject.prototype.move = function() {
  let pos = [];
  pos.push(this.pos[0] + this.vel[0]);
  pos.push(this.pos[1] + this.vel[1]);
  this.pos = pos;
}

GameObject.prototype.isCollidedWith = function(otherObj) {
  let top1 = this.pos[1]
  let top2 = otherObj.pos[1]
  let bottom1 = this.pos[1] + this.height
  let bottom2 = otherObj.pos[1] + otherObj.height
  let left1 = this.pos[0]
  let left2 = otherObj.pos[0]
  let right1 = this.pos[0] + this.width
  let right2 = otherObj.pos[0] + otherObj.width
  
  if (top1 > bottom2 || right1 < left2 || bottom1 < top2 || left1 > right2) {
    return false;
  }

  return true;
}

module.exports = GameObject;