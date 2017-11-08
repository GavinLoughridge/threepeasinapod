const expect = require('chai').expect
const podFunction = require('../threePeas.js');

let blankDice = {};
let dice = {  1: [1, "image placeholder1"],
              2: [2,"image placeholder2"],
              3: [3, "image placeholder3"],
              4: [4, "image placeholder4"],
              5: [5, "image placeholder5"],
              6: [6, "image placeholder6"]}


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

describe("2 side minimum", function () {
  it("a Dice must have at least 2 sides", function () {
     expect(podFunction.createDice(1)).to.equal('Error');
  })

  it("a Dice must have at least 2 sides", function () {
     expect(podFunction.createDice(6)).to.deep.equal({ 1: [1],
                                                       2: [2],
                                                       3: [3],
                                                       4: [4],
                                                       5: [5],
                                                       6: [6]});
  })


})
