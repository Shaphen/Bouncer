
function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function start() {

  const animate = () => {
    this.game.step(startAnimate, startCreate);
    this.game.draw(this.ctx);
    this.bindKeyHandlers();
  }
  let startAnimate = setInterval(animate, 20);

  const create = () => {
    this.game.addPlatforms();
  }
  let startCreate = setInterval(create, 750);
}

GameView.prototype.bindKeyHandlers = function() {
  if (key.isPressed("left")) { this.game.player.move([-8, 0]) };
  if (key.isPressed("right")) { this.game.player.move([8, 0]) };
  // document.addEventListener("keydown", event => {
  //   console.log(event)
  //   if (event.keyCode === 37) {
  //     this.game.player.move([-0.2, 0]);
  //   }
  //   if (event.keyCode === 39) {
  //     this.game.player.move([0.2, 0]);
  //   }
  // })
}

module.exports = GameView;