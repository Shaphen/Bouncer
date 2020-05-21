
function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function start() {
  const animate = () => {
    this.game.moveObjects()
    this.game.draw(this.ctx)
    this.bindKeyHandlers();
  }
  setInterval(animate, 20)

  const create = () => {
    this.game.addPlatforms();
  }
  setInterval(create, 750)
}

GameView.prototype.bindKeyHandlers = function() {
  if (key.isPressed("left")) { this.game.player.move([-8, 0]) };
  if (key.isPressed("right")) { this.game.player.move([8, 0]) };
}

module.exports = GameView;