const Platform = require("./02_platform");

function Game() {
  this.DIM_X = window.innerWidth;
  this.DIM_Y = window.innerHeight;
  this.NUM_PLATFORMS = 7;

  this.platforms = [];
  this.addPlatforms();
}

Game.prototype.randomPos = function() {
  return [(Math.floor(Math.random() * (this.DIM_X) - 100)), -300];
}

Game.prototype.randomNum = function(min, max) {
  return Math.random() < 0.5 ? min : max;
}

Game.prototype.otherVel = function(vel) {
  if (vel[0] === 1.5) {
    return [-1.5, 0];
  } else {
    return [1.5, 0];
  }
}

Game.prototype.addPlatforms = function() {
  for (let i = 0; i < this.NUM_PLATFORMS; i++) {
    this.platforms.push(new Platform({
      height: 150,
      width: 1,
      pos: this.randomPos(),
      vel: [0, this.randomNum(1, 2)],
      game: this
    }));
  }
}
  
Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(pf => {
    pf.drawBgRec(ctx);
  });
}

Game.prototype.moveObjects = function moveObjects() {
  this.platforms.forEach(function(pf){
    pf.move();
  });
}

Game.prototype.step = function() {
  this.moveObjects();
}

module.exports = Game;