describe("interactiveDancer", function() {

  var interactiveDancer;
  var interactiveDancer2;
  var timeBetweenSteps = 100;
  var clock;



  beforeEach(function() {
    clock = sinon.useFakeTimers();
    window.dancers = [];
    interactiveDancer = new makeInteractiveDancer(10, 20, timeBetweenSteps);
    interactiveDancer2 = new makeInteractiveDancer(20, 30, timeBetweenSteps);
    window.dancers.push(interactiveDancer, interactiveDancer2);

  });

  it("should have a jQuery $node object", function(){
    expect(interactiveDancer.$node).to.be.an.instanceof(jQuery);
  });
  


  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(interactiveDancer, "step");
      expect(interactiveDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(interactiveDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(interactiveDancer.step.callCount).to.be.equal(2);
    });
  });

  it("should have a step function that changes its location", function() {
    sinon.spy(interactiveDancer.$node, 'toggle');
    var originalPosition = [interactiveDancer.top, interactiveDancer.left];
    interactiveDancer.step();
    var finalPosition = [interactiveDancer.top, interactiveDancer.left];
    expect(originalPosition[0] !== finalPosition[0]).to.be.true;
    expect(originalPosition[1] !== finalPosition[1]).to.be.true;
  });

});
