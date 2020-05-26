# Welcome to Dodge!
## Table of Contents
* [Background](#background)
* [Technologies](#technologies)
* [Future Directions](#future-directions)
## Live Site
[Dodge!](https://shaphen.github.io/Dodge/)

## Background
![Dodge](https://github.com/Shaphen/Dodge/blob/master/dist/gifs/dodge.gif)
Dodge is a simple and easy to play platforming video game where the player tries to avoid the falling objects for as long as possible. This idea derived from the curiosity of challenging myself to go ourside of my comfort zone and attempt to create a game. I further challenged myself by only using Vanilla JavaScript, HTML, CSS, and the keymaster library.

## Technologies
### Collision Detection
Collision detection logic constantly checks with every cycle of the game loop if the `player` object is overlapping with a `platform` object and ends the game if this condition is met. This was a fun feature to figure out by understanding the difference in measurements based on which side of both objects are overlapping.

```javascript
Game.prototype.checkCollisions = function(startAnimate, startCreate) {
  let allObj = this.allObjects();
  for (let i = 0; i < allObj.length-1; i++) {
    let player = allObj[allObj.length - 1]
    if (allObj[i].isCollidedWith(player)) {
      this.collided = true;
      this.reset(startAnimate, startCreate);
    }
  }
}

GameObject.prototype.isCollidedWith = function(otherObj) {
  let top1 = this.pos[1]
  let top2 = otherObj.pos[1]
  // repeat for bottom, left, and right
  
  if (top1 > bottom2 || right1 < left2 || bottom1 < top2 || left1 > right2) {
    return false;
  }
  return true;
}
```

### Screen Wrapping
![Dodge-wrap](https://github.com/Shaphen/Dodge/blob/master/dist/gifs/dodge_wrap.gif)
The player is able to smoothly wrap from one side of the screen to the other instantly when breaking the game boundries. This feature was created to help players have an even bigger advantage in the game and keep the difficulty balanced.

```javascript
Game.prototype.wrap = function(pos) {
  if (pos[0] > this.DIM_X + 20) {
    pos[0] = (pos[0] % this.DIM_X) - 40;
  } else if (pos[0] < -20) {
    pos[0] = this.DIM_X + 20;
  }
  return pos;
}
```

## Future Directions
* Implement levels with increasing difficulty over time
* Change colors of platforms and background animations over time
* Improve visualizations
