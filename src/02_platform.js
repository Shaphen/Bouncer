const Util = require("./00_utils");
const GameObject = require("./01_game_object");

// platform = new Platform({
//   pos: [30, 30],
//   vel: [10, 10]
// });

const DEFAULT = {
  width: 150,
  height: 5,
  color: "white"
};

function Platform(options) {
  this.DIM_X = 450;
  options.width = DEFAULT.width;
  options.height = DEFAULT.height;
  options.color = DEFAULT.color;
  options.game = options.game;
  GameObject.call(this, options)
}

// Platform.prototype.move = function () {
//   let pos = [];
//   pos.push(this.pos[0] + this.vel[0]);
//   pos.push(this.pos[1] + this.vel[1]);
//   this.pos = pos;

//   let newPos = this.game.wrap(pos,this.DIM_X)
//   this.pos = newPos;
// }

Util.inherits(GameObject, Platform)

module.exports = Platform;