const bgObjs = require("./03_bg_objects");
const Game = require("./03_game");
window.Game = Game;
const GameView = require("./03_game_view");
window.GameView = GameView

window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  let bgCanvas = document.getElementById("bg-canvas");
  let bgCtx = bgCanvas.getContext("2d")
  let span = document.getElementsByClassName("close-modal")[0];
  let span2 = document.getElementsByClassName("close-modal2")[0];
  let music = document.getElementById("music");
  let playMusic = document.getElementById("play");
  let pauseMusic = document.getElementById("pause");
  playMusic.addEventListener("click", function () {
    music.play();
  }, false);

  pauseMusic.addEventListener("click", function () {
    music.pause();
  }, false);
  const game = new Game();
  const bgAnimation = new bgObjs();

  new GameView(bgAnimation, bgCtx).start();
  
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