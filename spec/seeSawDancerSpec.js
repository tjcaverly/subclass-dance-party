describe("seeSawDancer", function() {

  var seeSawDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    seeSawDancer = new makeSeeSawDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(seeSawDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that changes its location", function() {
    sinon.spy(seeSawDancer.$node, 'toggle');
    var originalPosition = [seeSawDancer.top, seeSawDancer.left];
    seeSawDancer.step();
    var finalPosition = [seeSawDancer.top, seeSawDancer.left];
    expect(originalPosition[0] !== finalPosition[0]).to.be.true;
  });
  
  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(seeSawDancer, "step");
      expect(seeSawDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(seeSawDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(seeSawDancer.step.callCount).to.be.equal(2);
    });
  });
});
