var makeCircleDancer = function(top, left, timeBetweenSteps){
  //this.oldStep = makeDancer.prototype.step;
  this.radius = 50;
  this.centerY = top + this.radius;
  this.centerX = left;
  this.degrees = 0;
  this.speed = 1;
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.css("background-image", "url('bender.jpg')");
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  this.$node.addClass('circle');
  this.$node.html("<img src='bender.png' height=80 width=65>");

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//return blinkyDancer;
};
makeCircleDancer.prototype = Object.create(makeDancer.prototype);

makeCircleDancer.prototype.constructor = makeCircleDancer;

makeCircleDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;

  
  var posArray = this.circleDance();
  this.top = posArray[0];
  this.left = posArray[1];

  //this.setPosition(this.top, this.left);

  makeDancer.prototype.step.call(this);


    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};

makeCircleDancer.prototype.circleDance = function() {
  var x = this.radius*Math.sin(this.degrees) + this.centerX;
  var y = this.radius*Math.cos(this.degrees) + this.centerY;

  this.degrees += this.speed;

  return [y, x];
};

makeCircleDancer.prototype.oldLineUp = makeDancer.prototype.lineUp;

makeCircleDancer.prototype.lineUp = function() {
  this.oldLineUp();
  this.centerX = 0;
}
