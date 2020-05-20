const GameObject = require("./01_game_object");
window.GameObject = GameObject;
const Platform = require("./02_platform");
window.Platform = Platform;
const Player = require("./02_player");
window.Player = Player
const Game = require("./03_game");
window.Game = Game;
const GameView = require("./03_game_view");
window.GameView = GameView

window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  const game = new Game();
  new GameView(game, ctx).start();
});