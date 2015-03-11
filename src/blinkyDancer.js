var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  //this.oldStep = makeDancer.prototype.step;
  this.imageURLs = ['prof.png', 'youngprof.png'];
  this.imageNum = 1;
  var context = this;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blinky');
  this.$node.html("<img src='prof.png' height=75 width=60>");

  this.$node.click(function(){
    var imageURL = context.imageURLs[context.imageNum];
    context.imageNum = (context.imageNum+1)%2;
    $(this).html("<img src="+imageURL+" height=75 width=60>");
    //$(this).css("border", "30px solid orange");
    //$(this).css("border-radius", "30px");
    //console.log('hi');
  });
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

//return blinkyDancer;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  //debugger;


  this.$node.toggle();
  makeDancer.prototype.step.call(this);

    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
};
