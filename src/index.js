const Game = require("./03_game");
window.Game = Game;
const GameView = require("./03_game_view");
window.GameView = GameView

window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  let span = document.getElementsByClassName("close-modal")[0];
  let span2 = document.getElementsByClassName("close-modal2")[0];
  const game = new Game();

  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
    new GameView(game, ctx).start();
  }

  span2.onclick = function () {
    modal2.style.display = "none";
    new GameView(game, ctx).start();
  }
});