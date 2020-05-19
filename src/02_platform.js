const Util = require("./00_utils");
const GameObject = require("./01_game_object");

// platform = new Platform({
//   pos: [30, 30],
//   vel: [10, 10]
// });

const DEFAULT = {
  width: 80,
  height: 3,
  color: "white"
};

function Platform(options) {
  options.width = DEFAULT.width;
  options.height = DEFAULT.height;
  options.color = DEFAULT.color
  GameObject.call(this, options)
}

Util.inherits(GameObject, Platform)

module.exports = Platform;