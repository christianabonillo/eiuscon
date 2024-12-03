Element.prototype.removeClass = function(className) {
  if (this.classList) {
    this.classList.remove(className);
  } else {
    var classes = this.className.split(" ");
    var index = classes.indexOf(className);
    if (index !== -1) {
      classes.splice(index, 1);
      this.className = classes.join(" ");
    }
  }
  return this;
};
