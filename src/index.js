const Game = require("./03_game");
window.Game = Game;
const GameView = require("./03_game_view");
window.GameView = GameView

window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  let span = document.getElementsByClassName("close-modal")[0];
  var modal = document.getElementById("modal");
  const game = new Game();

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
    start = true;
    new GameView(game, ctx).start();
  }
});