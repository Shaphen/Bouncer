console.log("webpack is working!")
const GameObject = require("./01_game_object");
window.GameObject = GameObject;
const Platform = require("./02_platform");
window.Platform = Platform;

window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  window.ctx = ctx;
});