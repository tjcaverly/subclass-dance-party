// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  window.dancers.push(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  //this.dancer = {};

  // use jQuery to create an HTML <span> tag

  this.$node = $('<span class="dancer"></span>');

  this.setPosition(top, left);
  this.step();


  //debugger;
};

  makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    //this.step();
    var self = this;
    var max = [window.innerHeight, window.innerWidth];

    if (self.top > max[0]){
      self.top = max[0];
    }
    if (self.left > max[1]) {
      self.left = max[1];
    }

    self.setPosition(self.top, self.left);

    // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
    // this one sets the position to some random default point within the body

    setTimeout(function(){self.step()}, self.timeBetweenSteps);
  };

  makeDancer.prototype.lineUp = function() {
    this.left = 0;
    this.setPosition(this.top, this.left);
    console.log("Being Called");
  };

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    //this.setPosition(top, left);
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };
