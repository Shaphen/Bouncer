const Util = require("./00_utils");
const GameObject = require("./01_game_object");

const DEFAULT = {
  height: 7,
  color: "green"
};

function Platform(options) {
  this.DIM_X = 450;
  options.height = DEFAULT.height;
  options.color = DEFAULT.color;
  options.game = options.game;
  GameObject.call(this, options)
}

Util.inherits(GameObject, Platform)

module.exports = Platform;