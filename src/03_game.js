const Platform = require("./02_platform");
const Player = require("./02_player");

function Game() {
  this.DIM_X = 650;
  this.DIM_Y = 500;
  this.NUM_PLATFORMS = 1;

  this.platforms = [];
  this.addPlatforms();
  this.player = new Player({
    game: this,
    width: 25,
    height: 25,
  });
  this.collided = false;
}

Game.prototype.randomPos = function() {
  return [(Math.floor(Math.random() * (650) - 100)), -20];
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
      width: Math.floor(Math.random() * (300-200) + 200),
      pos: this.randomPos(),
      vel: [0, this.randomNum(4, 5)],
      game: this
    }));
  }
}
  
Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(pf => {
    pf.drawRec(ctx);
  });
  this.player.drawPlayer(ctx);
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
    pos[0] = this.DIM_X + 20;
  }
  return pos;
}

// Game.prototype.reverse = function(pos, vel) {
//   if (pos[0] > (this.DIM_X - 200) || pos[0] < 0) {
//     vel = this.otherVel(vel)
//   }
//   return vel;
// }

Game.prototype.allObjects = function() {
  return [].concat(this.platforms, this.player);
}

Game.prototype.checkCollisions = function(startAnimate, startCreate) {
  let allObj = this.allObjects();
  for (let i = 0; i < allObj.length-1; i++) {
    let player = allObj[allObj.length - 1]
    if (allObj[i].isCollidedWith(player)) {
      this.collided = true;
      this.reset(startAnimate, startCreate);
    }
  }
}

Game.prototype.reset = function(startAnimate, startCreate) {
  this.platforms = [];
  this.player.pos = [320, 450];
  this.collided = false;
  clearInterval(startAnimate);
  clearInterval(startCreate);
  modal2.style.display = "block";
  resetTimer();
}

Game.prototype.step = function(startAnimate, startCreate) {
  this.moveObjects();
  if (!this.collided){ this.checkCollisions(startAnimate, startCreate); };
}

module.exports = Game;