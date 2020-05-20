
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
}

GameView.prototype.bindKeyHandlers = function() {
  key("space", () => { this.game.player.move([0, 1]) });
}

module.exports = GameView;