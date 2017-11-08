const expect = require('chai').expect
const podFunction = require('../threePeas.js');

describe("create dice", function () {
  it("creates a Dice object", function () {
     expect(podFunction.createDice()).to.be.a('object');
  })
})

describe("roll function", function () {
  it("returns a random number", function () {
     expect(podFunction.roll(dice)).to.be.a('number');
  })

  it("returns another random number", function () {
     expect(podFunction.roll(dice)).to.be.a('number');
  })

  it("returns yet another random number", function () {
     expect(podFunction.roll(dice)).to.be.a('number');
  })


})
