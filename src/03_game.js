const Platform = require("./02_platform");
const Player = require("./02_player");

function Game() {
  this.DIM_X = 450;
  this.DIM_Y = 500;
  this.NUM_PLATFORMS = 1;

  this.platforms = [];
  this.addPlatforms();
  this.player = new Player({
    game: this
  });
}

Game.prototype.randomPos = function() {
  // return [(this.DIM_X / 2) * Math.random(), (this.DIM_Y) * Math.random()];
  return [(this.DIM_X) * Math.random(), -10];
}

Game.prototype.randomNum = function(min, max) {
  // return Math.floor(Math.random() * (max - min) + min);
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
      pos: this.randomPos(),
      vel: [0, this.randomNum(1.5, 2.5)],
      game: this
    }));
  }
}

// Game.prototype.addPlayer = function() {
//   const player = new Player({
//     game: this
//   });
//   this.players.push(player)
// }
  
Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(pf => {
    pf.drawRec(ctx);
  });
  this.player.drawCir(ctx);
}

Game.prototype.moveObjects = function moveObjects() {
  this.platforms.forEach(function(pf){
    pf.move();
  });
}

Game.prototype.wrap = function(pos) {
  if (pos[0] > this.DIM_X + 20) {
    pos[0] = (pos[0] % this.DIM_X) - 40;
  } else if (pos[0] < -20) {
    pos[0] = this.DIM_X + 20
  }
  return pos;
}

Game.prototype.reverse = function (pos, vel) {
  if (pos[0] > (this.DIM_X - 200) || pos[0] < 0) {
    vel = this.otherVel(vel)
  }
  return vel;
}

module.exports = Game;