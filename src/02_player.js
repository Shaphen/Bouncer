const Util = require("./00_utils");
const GameObject = require("./01_game_object");

// player = new Player({
//   vel: [-10, 0]
// });

const DEFAULT = {
  pos: [220, 480],
  rad: 20,
  color: "white"
};

function Player(options) {
  options.pos = options.pos || DEFAULT.pos
  options.rad = options.rad || DEFAULT.rad;
  options.vel = options.vel || [0, 0];
  options.color = options.color ||  DEFAULT.color;
  GameObject.call(this, options);
}

Util.inherits(GameObject, Player);

Player.prototype.move = function(newPos) {
  this.pos[0] = this.pos[0] + newPos[0];
  this.pos[1] = this.pos[1] + newPos[1];
}

module.exports = Player;
