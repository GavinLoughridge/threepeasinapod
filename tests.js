const expect = require('chai').expect
const podFunction = require('js.js');

let blankDice = {};
let dice = {
  1: [1, "image placeholder1"],
  2: [2, "image placeholder2"],
  3: [3, "image placeholder3"],
  4: [4, "image placeholder4"],
  5: [5, "image placeholder5"],
  6: [6, "image placeholder6"]
};


describe("create dice", function() {
  it("creates a Dice object", function() {
    expect(podFunction.createDice(3)).to.be.a('object');
  });
});

describe("roll function", function() {
  it("returns a random number", function() {
    expect(podFunction.roll(dice)).to.be.a('number');
  });

  it("returns another random number", function() {
    expect(podFunction.roll(dice)).to.be.a('number');
  });

  it("returns yet another random number", function() {
    expect(podFunction.roll(dice)).to.be.a('number');
  });
});

describe("set sides", function() {
  it("sets key:value pairs in object", function() {
    expect(podFunction.setSides(6)).to.deep.equal({
      1: [1],
      2: [2],
      3: [3],
      4: [4],
      5: [5],
      6: [6]
    });

  });
});

describe("get value", function() {
  it("returns the value associated with the side", function() {
      expect(podFunction.getValue(dice .1)).to.equal(1);
      });
  }) it("returns the value associated with the side", function() {
  expect(podFunction.getValue(dice .7)).to.equal(
    "Pick a number 1-6");
});
})


describe("create object with values", function() {
  it("creates an object with values"function() {
      expect(podFunction.createDice(6).to.deep.equal {
          1: [1],
          2: [2],
          3: [3],
          4: [4],
          5: [5],
          6: [6]
        }
      });
  })
})


describe("create object with images", function() {
  it("creates an object with images"function() {
      expect(podFunction.createDice(6).to.deep.equal {
          1: ["image placeholder1"],
          2: ["image placeholder1"],
          3: ["image placeholder1"],
          4: ["image placeholder1"],
          5: ["image placeholder1"],
          6: ["image placeholder1"]
        }
      });
  })
})




describe("get image", function() {
  it("returns the image associated with the side", function() {
    expect(podFunction.getImage(dice .1)).to.equal("image placeholder1");
  })
  it("returns the image associated with the side", function() {
    expect(podFunction.getImage(dice .7)).to.equal(
      "Pick a number 1-6");


  })
})




describe("2 side minimum", function() {
  it("a Dice must have at least 2 sides", function() {
    expect(podFunction.createDice(1)).to.equal('Error');
  })

  it("a Dice must have at least 2 sides", function() {
    expect(podFunction.createDice(6)).to.deep.equal({
      1: [1],
      2: [2],
      3: [3],
      4: [4],
      5: [5],
      6: [6]
    });
  })


})


modules.export = {
  mocha;
}
