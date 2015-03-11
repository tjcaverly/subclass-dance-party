var makeInteractiveDancer = function(top, left, timeBetweenSteps){
  //this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('interactive');
  this.$node.html("<img src='zoid.png' height=75 width=50>");

  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);


  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//return blinkyDancer;
};
makeInteractiveDancer.prototype = Object.create(makeDancer.prototype);

makeInteractiveDancer.prototype.constructor = makeInteractiveDancer;


makeInteractiveDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;

  makeDancer.prototype.step.call(this);



  var moveAwayFrom = this.detectClosest();
  
  if (moveAwayFrom) {
    this.top += (this.top - moveAwayFrom[0]);
    this.left += (this.left - moveAwayFrom[1]);

    this.setPosition(this.top, this.left);
  } 



    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};

makeInteractiveDancer.prototype.detectClosest = function() {

  if(!window.dancers){
    return [this.top, this.left];
  }

  var min = Infinity;
  var minLocation;

  for (var i = 0; i<window.dancers.length; i++) {
    var aDancer = window.dancers[i];
    if (aDancer !== this){

    var distance = Math.pow( (this.top - aDancer.top), 2) + Math.pow( (this.left-aDancer.left), 2);
    if (distance < min){
      min = distance;
      minLocation = [aDancer.top, aDancer.left];
    }
    }
  }
  return minLocation || false;
}