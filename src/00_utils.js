
const Util = {
  inherits = function(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
  }
}

module.exports = Util;