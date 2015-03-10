describe("circleDancer", function() {

  var circleDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    circleDancer = new makeCircleDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(circleDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that changes its location", function() {
    sinon.spy(circleDancer.$node, 'toggle');
    var originalPosition = [circleDancer.top, circleDancer.left];
    circleDancer.step();
    var finalPosition = [circleDancer.top, circleDancer.left];
    expect(originalPosition[0] !== finalPosition[0]).to.be.true;
    expect(originalPosition[1] !== finalPosition[1]).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(circleDancer, "step");
      expect(circleDancer.step.callCount).to.be.equal(0);
      //clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(circleDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(circleDancer.step.callCount).to.be.equal(2);
    });
  });
});
