var makeSeeSawDancer = function(top, left, timeBetweenSteps){
  //this.oldStep = makeDancer.prototype.step;
  this.goingForward = 1;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('seeSaw');
  this.$node.html("<img src='fry.png' height=80 width=45>");

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//return blinkyDancer;
};
makeSeeSawDancer.prototype = Object.create(makeDancer.prototype);

makeSeeSawDancer.prototype.constructor = makeSeeSawDancer;

makeSeeSawDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;

  makeDancer.prototype.step.call(this);

  this.goingForward *= -1;
  this.top += 10 * this.goingForward;
  this.setPosition(this.top, this.left);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};
