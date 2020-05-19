
function Game() {
  this.DIM_X = 250;
  this.DIM_Y = 175;
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

module.exports = Game;