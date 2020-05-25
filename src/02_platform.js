const Util = require("./00_utils");
const GameObject = require("./01_game_object");
Util.inherits(GameObject, Platform)

const DEFAULT = {
  height: 7,
  color: "green"
};

function Platform(options) {
  this.DIM_X = 450;
  options.height = options.height || DEFAULT.height;
  options.color = options.color || DEFAULT.color;
  options.game = options.game;
  GameObject.call(this, options)
}


module.exports = Platform;