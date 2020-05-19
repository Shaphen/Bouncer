
function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 250;
  this.NUM_PLATFORMS = 10;

  this.platforms = [];
  this.addPlatforms();
}

Game.prototype.randomPos = function() {
  return [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
}

Game.prototype.randomNum = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Game.prototype.addPlatforms = function() {
  for (let i = 0; i < this.NUM_PLATFORMS; i++) {
    this.platforms.push(new Platform({
      pos: this.randomPos(),
      vel: [this.randomNum(-3, 3), 0]
    }));
  }
}
  
Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(pf => {
    pf.drawRec(ctx);
  });
}

Game.prototype.moveObjects = function moveObjects() {
  this.platforms.forEach(function(pf){
    pf.move();
  });
}

Game.prototype.wrap = function(pos) { // refactor/add reverse after successful wrap
  if (pos[0] > this.DIM_X) {
    pos[0] = pos[0] % this.DIM_X;
  } else if (pos[0] < 0) {
    pos[0] = this.DIM_X
  }
  if (pos[1] > this.DIM_Y) {
    pos[1] = pos[1] % this.DIM_Y;
  } else if (pos[1] < 0) {
    pos[1] = this.DIM_Y
  }
}

module.exports = Game;