console.log("webpack is working!")
const GameObject = require("./01_game_object");
window.GameObject = GameObject;


window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  window.canvas = canvas;
  window.ctx = ctx;
});