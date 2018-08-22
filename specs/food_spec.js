const assert = require("assert");
const Food = require("../models/food.js");
const Rat = require("../models/rat.js");

describe("Food", function(){

  beforeEach(function(){
    food = new Food("Sausage", 100)
  });

    it("Should have a name", function(){
      const actual = food.name;
      assert.strictEqual(actual, "Sausage")
    });

    it("Should have replenishment level", function(){
      const actual = food.replenishment;
      assert.strictEqual(actual, 100)
    });

    it("Should initially be not poisonous", function(){
      const actual = food.isPoisonous;
      assert.strictEqual(actual, false)
    });

    it("Should turn poisonous when touched by rat", function(){
      rat = new Rat()
      food.touchedByDirtyWeeRatBastard()
      const actual = food.isPoisonous;
      assert.strictEqual(actual, true)
    });

})
