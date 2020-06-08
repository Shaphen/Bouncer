/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/00_utils.js":
/*!*************************!*\
  !*** ./src/00_utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Util = {
  inherits: function inherits(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  },
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  }
};
module.exports = Util;

/***/ }),

/***/ "./src/01_game_object.js":
/*!*******************************!*\
  !*** ./src/01_game_object.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function GameObject(options) {
  this.pos = options.pos; // ex. [30, 30]

  this.vel = options.vel; // ex. [10, 10]

  this.rad = options.rad; // ex. 10

  this.width = options.width; // ex. 5

  this.height = options.height; // ex. 5

  this.color = options.color; // ex. "#00FF00"

  this.game = options.game;
}

GameObject.prototype.drawRec = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = "#DC1C13";
  ctx.shadowColor = "red";
  ctx.shadowBlur = 10;
  ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
  ctx.fill();
};

GameObject.prototype.drawBgRec = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
  ctx.shadowColor = "white";
  ctx.shadowBlur = 10;
  ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
  ctx.fill();
};

GameObject.prototype.drawPlayer = function (ctx) {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.shadowColor = "blue";
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.shadowBlur = 10;
  ctx.rect(this.pos[0], this.pos[1], this.width, this.height);
  ctx.stroke();
  ctx.fill();
}; // GameObject.prototype.drawCir = function(ctx) {
//   ctx.beginPath();
//   ctx.fillStyle = this.color;
// ctx.strokeStyle = "blue";
// ctx.lineWidth = 4;
// ctx.shadowColor = "blue";
// ctx.shadowBlur = 10;
//   ctx.arc(this.pos[0], this.pos[1], this.rad, 0, 2*Math.PI, false);
//   ctx.stroke();
// };


GameObject.prototype.move = function () {
  var pos = [];
  pos.push(this.pos[0] + this.vel[0]);
  pos.push(this.pos[1] + this.vel[1]);
  this.pos = pos;
};

GameObject.prototype.isCollidedWith = function (otherObj) {
  var top1 = this.pos[1];
  var top2 = otherObj.pos[1];
  var bottom1 = this.pos[1] + this.height;
  var bottom2 = otherObj.pos[1] + otherObj.height;
  var left1 = this.pos[0];
  var left2 = otherObj.pos[0];
  var right1 = this.pos[0] + this.width;
  var right2 = otherObj.pos[0] + otherObj.width;

  if (top1 > bottom2 || right1 < left2 || bottom1 < top2 || left1 > right2) {
    return false;
  }

  return true;
};

module.exports = GameObject;

/***/ }),

/***/ "./src/02_platform.js":
/*!****************************!*\
  !*** ./src/02_platform.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ./00_utils */ "./src/00_utils.js");

var GameObject = __webpack_require__(/*! ./01_game_object */ "./src/01_game_object.js");

Util.inherits(GameObject, Platform);
var DEFAULT = {
  height: 7,
  color: "green"
};

function Platform(options) {
  this.DIM_X = 450;
  options.height = options.height || DEFAULT.height;
  options.color = options.color || DEFAULT.color;
  options.game = options.game;
  GameObject.call(this, options);
}

module.exports = Platform;

/***/ }),

/***/ "./src/02_player.js":
/*!**************************!*\
  !*** ./src/02_player.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Util = __webpack_require__(/*! ./00_utils */ "./src/00_utils.js");

var GameObject = __webpack_require__(/*! ./01_game_object */ "./src/01_game_object.js");

Util.inherits(GameObject, Player);
var DEFAULT = {
  pos: [320, 450],
  rad: 16,
  color: "white"
};

function Player(options) {
  this.DIM_X = 450;
  options.pos = options.pos || DEFAULT.pos;
  options.rad = options.rad || DEFAULT.rad;
  options.vel = options.vel || [0, 0];
  options.color = options.color || DEFAULT.color;
  this.game = options.game;
  GameObject.call(this, options);
}

Player.prototype.move = function (pos) {
  var newPos = [];
  newPos.push(this.pos[0] + pos[0]);
  newPos.push(this.pos[1] + pos[1]);
  finalPos = this.game.wrap(newPos, this.DIM_X);
  this.pos = finalPos;
};

module.exports = Player;

/***/ }),

/***/ "./src/03_bg_objects.js":
/*!******************************!*\
  !*** ./src/03_bg_objects.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Platform = __webpack_require__(/*! ./02_platform */ "./src/02_platform.js");

function Game() {
  this.DIM_X = window.innerWidth;
  this.DIM_Y = window.innerHeight;
  this.NUM_PLATFORMS = 7;
  this.platforms = [];
  this.addPlatforms();
}

Game.prototype.randomPos = function () {
  return [Math.floor(Math.random() * this.DIM_X - 100), -300];
};

Game.prototype.randomNum = function (min, max) {
  return Math.random() < 0.5 ? min : max;
};

Game.prototype.otherVel = function (vel) {
  if (vel[0] === 1.5) {
    return [-1.5, 0];
  } else {
    return [1.5, 0];
  }
};

Game.prototype.addPlatforms = function () {
  for (var i = 0; i < this.NUM_PLATFORMS; i++) {
    this.platforms.push(new Platform({
      height: 150,
      width: 1,
      pos: this.randomPos(),
      vel: [0, this.randomNum(1, 2)],
      game: this
    }));
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(function (pf) {
    pf.drawBgRec(ctx);
  });
};

Game.prototype.moveObjects = function moveObjects() {
  this.platforms.forEach(function (pf) {
    pf.move();
  });
};

Game.prototype.step = function () {
  this.moveObjects();
};

module.exports = Game;

/***/ }),

/***/ "./src/03_game.js":
/*!************************!*\
  !*** ./src/03_game.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Platform = __webpack_require__(/*! ./02_platform */ "./src/02_platform.js");

var Player = __webpack_require__(/*! ./02_player */ "./src/02_player.js");

function Game() {
  this.DIM_X = 650;
  this.DIM_Y = 500;
  this.NUM_PLATFORMS = 1;
  this.platforms = [];
  this.addPlatforms();
  this.player = new Player({
    game: this,
    width: 25,
    height: 25
  });
  this.collided = false;
}

Game.prototype.randomPos = function () {
  return [Math.floor(Math.random() * 650 - 100), -20];
};

Game.prototype.randomNum = function (min, max) {
  return Math.random() < 0.5 ? min : max;
};

Game.prototype.otherVel = function (vel) {
  if (vel[0] === 1.5) {
    return [-1.5, 0];
  } else {
    return [1.5, 0];
  }
};

Game.prototype.addPlatforms = function () {
  for (var i = 0; i < this.NUM_PLATFORMS; i++) {
    this.platforms.push(new Platform({
      width: Math.floor(Math.random() * (300 - 200) + 200),
      pos: this.randomPos(),
      vel: [0, this.randomNum(4, 5)],
      game: this
    }));
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.platforms.forEach(function (pf) {
    pf.drawRec(ctx);
  });
  this.player.drawPlayer(ctx);
};

Game.prototype.moveObjects = function moveObjects() {
  this.platforms.forEach(function (pf) {
    pf.move();
  });
};

Game.prototype.wrap = function (pos) {
  if (pos[0] > this.DIM_X + 20) {
    pos[0] = pos[0] % this.DIM_X - 40;
  } else if (pos[0] < -20) {
    pos[0] = this.DIM_X + 20;
  }

  return pos;
}; // Game.prototype.reverse = function(pos, vel) {
//   if (pos[0] > (this.DIM_X - 200) || pos[0] < 0) {
//     vel = this.otherVel(vel)
//   }
//   return vel;
// }


Game.prototype.allObjects = function () {
  return [].concat(this.platforms, this.player);
};

Game.prototype.checkCollisions = function (startAnimate, startCreate) {
  var allObj = this.allObjects();

  for (var i = 0; i < allObj.length - 1; i++) {
    var player = allObj[allObj.length - 1];

    if (allObj[i].isCollidedWith(player)) {
      this.collided = true;
      this.reset(startAnimate, startCreate);
    }
  }
};

Game.prototype.reset = function (startAnimate, startCreate) {
  this.platforms = [];
  this.player.pos = [320, 450];
  this.collided = false;
  clearInterval(startAnimate);
  clearInterval(startCreate);
  modal2.style.display = "block";
};

Game.prototype.step = function (startAnimate, startCreate) {
  this.moveObjects();

  if (!this.collided) {
    this.checkCollisions(startAnimate, startCreate);
  }

  ;
};

module.exports = Game;

/***/ }),

/***/ "./src/03_game_view.js":
/*!*****************************!*\
  !*** ./src/03_game_view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function GameView(game, ctx) {
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function start() {
  var _this = this;

  var animate = function animate() {
    if (document.hasFocus()) {
      // this.game.step(startAnimate, startCreate);
      _this.game.draw(_this.ctx);

      if (_this.game.player) {
        _this.bindKeyHandlers();
      }
    }
  };

  var startAnimate = setInterval(animate, 15);

  var create = function create() {
    if (document.hasFocus()) {
      _this.game.addPlatforms();
    }
  };

  var startCreate = setInterval(create, 700);
};

GameView.prototype.bindKeyHandlers = function () {
  if (key.isPressed("left")) {
    this.game.player.move([-8, 0]);
  }

  ;

  if (key.isPressed("right")) {
    this.game.player.move([8, 0]);
  }

  ;
};

module.exports = GameView;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bgObjs = __webpack_require__(/*! ./03_bg_objects */ "./src/03_bg_objects.js");

var Game = __webpack_require__(/*! ./03_game */ "./src/03_game.js");

window.Game = Game;

var GameView = __webpack_require__(/*! ./03_game_view */ "./src/03_game_view.js");

window.GameView = GameView;
document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById("game-canvas");
  var ctx = canvas.getContext("2d");
  var bgCanvas = document.getElementById("bg-canvas");
  var bgCtx = bgCanvas.getContext("2d");
  var span = document.getElementsByClassName("close-modal")[0];
  var span2 = document.getElementsByClassName("close-modal2")[0];
  var music = document.getElementById("music");
  var playMusic1 = document.getElementById("play1");
  var pauseMusic1 = document.getElementById("pause1");
  var playMusic2 = document.getElementById("play2");
  var pauseMusic2 = document.getElementById("pause2");
  pauseMusic1.style.display = "none";
  pauseMusic2.style.display = "none";
  playMusic1.addEventListener("click", function () {
    music.play();
    playMusic1.style.display = "none";
    playMusic2.style.display = "none";
    pauseMusic1.style.display = "block";
    pauseMusic2.style.display = "block";
  });
  pauseMusic1.addEventListener("click", function () {
    music.pause();
    pauseMusic1.style.display = "none";
    pauseMusic2.style.display = "none";
    playMusic1.style.display = "block";
    playMusic2.style.display = "block";
  });
  playMusic2.addEventListener("click", function () {
    music.play();
    playMusic2.style.display = "none";
    pauseMusic2.style.display = "block";
  });
  pauseMusic2.addEventListener("click", function () {
    music.pause();
    pauseMusic2.style.display = "none";
    playMusic2.style.display = "block";
  });
  var game = new Game();
  var bgAnimation = new bgObjs();
  new GameView(bgAnimation, bgCtx).start();
  modal.style.display = "block";

  span.onclick = function () {
    modal.style.display = "none";
    new GameView(game, ctx).start();
  };

  span2.onclick = function () {
    modal2.style.display = "none";
    new GameView(game, ctx).start();
  }; // timer logic below


  var startTimerButton = document.querySelector('.startTimer');
  var pauseTimerButton = document.querySelector('.pauseTimer');
  var timerDisplay = document.querySelector('.timer');
  var startTime;
  var updatedTime;
  var difference;
  var tInterval;
  var savedTime;
  var paused = 0;
  var running = 0;

  function startTimer() {
    if (!running) {
      startTime = new Date().getTime();
      tInterval = setInterval(getShowTime, 1);
      paused = 0;
      running = 1;
      timerDisplay.style.background = "#FF0000";
      timerDisplay.style.cursor = "auto";
      timerDisplay.style.color = "yellow";
      startTimerButton.classList.add('lighter');
      pauseTimerButton.classList.remove('lighter');
      startTimerButton.style.cursor = "auto";
      pauseTimerButton.style.cursor = "pointer";
    }
  }

  function pauseTimer() {
    if (!difference) {// if timer never started, don't allow pause button to do anything
    } else if (!paused) {
      clearInterval(tInterval);
      savedTime = difference;
      paused = 1;
      running = 0;
      timerDisplay.style.background = "#A90000";
      timerDisplay.style.color = "#690000";
      timerDisplay.style.cursor = "pointer";
      startTimerButton.classList.remove('lighter');
      pauseTimerButton.classList.add('lighter');
      startTimerButton.style.cursor = "pointer";
      pauseTimerButton.style.cursor = "auto";
    } else {
      startTimer();
    }
  }

  function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;
    timerDisplay.innerHTML = 'Start Studying!';
    timerDisplay.style.background = "#A90000";
    timerDisplay.style.color = "#fff";
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.remove('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
  }

  function getShowTime() {
    updatedTime = new Date().getTime();

    if (savedTime) {
      difference = updatedTime - startTime + savedTime;
    } else {
      difference = updatedTime - startTime;
    } // var days = Math.floor(difference / (1000 * 60 * 60 * 24));


    var hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
    var seconds = Math.floor(difference % (1000 * 60) / 1000);
    var milliseconds = Math.floor(difference % (1000 * 60) / 100);
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    milliseconds = milliseconds < 100 ? milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds : milliseconds;
    timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds + ':' + milliseconds;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map