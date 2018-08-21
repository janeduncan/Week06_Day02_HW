const assert = require("assert");
const Rat = require("../models/rat.js");
const Food = require("../models/food.js");

describe("Rat", function(){

  it("Should touch food and make it poisonous", function(){
    food = new Food("Meatballs", 100);
    rat = new Rat();
    rat.touchFood(food);
    let actual = food.isPoisonous;
    assert.strictEqual(actual, true)
  });

})
