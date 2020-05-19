function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function start() {
  const animate = () => {
    this.game.moveObjects()
    this.game.draw(this.ctx)
  }
  setInterval(animate, 20)
}

module.exports = GameView;