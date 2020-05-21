const Util = require("./00_utils");
const GameObject = require("./01_game_object");
Util.inherits(GameObject, Player);

// player = new Player({
//   vel: [-10, 0]
// });

const DEFAULT = {
  pos: [220, 450],
  rad: 16,
  color: "white"
};

function Player(options) {
  this.DIM_X = 450;
  options.pos = options.pos || DEFAULT.pos
  options.rad = options.rad || DEFAULT.rad;
  options.vel = options.vel || [0, 0];
  options.color = options.color ||  DEFAULT.color;
  this.game = options.game
  GameObject.call(this, options);
}


Player.prototype.move = function(pos) {
  let newPos = []
  newPos.push(this.pos[0] + pos[0]);
  newPos.push(this.pos[1] + pos[1]);

  finalPos = this.game.wrap(newPos, this.DIM_X)
  this.pos = finalPos
}

module.exports = Player;
