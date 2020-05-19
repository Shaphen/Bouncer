console.log("webpack is working!")
const MovingObject = require("./01_moving_object");
window.MovingObject = MovingObject;


window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("game-canvas");
  let ctx = canvas.getContext("2d")
  window.canvas = canvas;
  window.ctx = ctx;
});