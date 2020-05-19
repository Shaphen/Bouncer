
function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 250;
  this.NUM_PLATFORMS = 5;

  this.addPlatforms();
}

function randomPos(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Game.prototype.addPlatforms =  function() {
  let platforms = [];

  for (let i = 0; i < this.NUM_PLATFORMS; i++) {
    platforms.push(new Platform({
      pos: [randomPos(this.DIM_X), randomPos(this.DIM_Y)],
      vel: [randomNum(-10, 10), 0]
    }));
  }

  return platforms;
}
  
Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(pf => {
    pf.draw(ctx);
  });
}

Game.prototype.moveObjects = function moveObjects() {
  this.platforms.forEach(pf => {
    pf.move();
  });
}

module.exports = Game;