const Util = require("./00_utils");
const GameObject = require("./01_game_object");

// player = new Player({
//   vel: [-10, 0]
// });

const DEFAULT = {
  pos: [145, 140],
  rad: 10,
  color: "white"
};

function Player(options) {
  options.pos = options.pos || DEFAULT.pos
  options.rad = options.rad || DEFAULT.rad;
  options.color = options.color ||  DEFAULT.color;
  GameObject.call(this, options);
}

Util.inherits(GameObject, Player);

module.exports = Player;
