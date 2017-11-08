const expect = require('chai').expect
const podFunction = require('../threePeas.js');

describe("create dice", function () {
  it("creates a Dice object", function () {
     expect(podFunction.createDice()).to.be.a('object');
  })
})
