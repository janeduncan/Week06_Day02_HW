const assert = require("assert");
const Hero = require("../models/hero.js");

describe("Hero", function(){

  beforeEach(function(){
    hero = new Hero("Charlie", "Hot Dogs")
  });

    it("Should have a name", function(){
      const actual = hero.name;
      assert.strictEqual(actual, "Charlie")
    });

    it("Should have health", function(){
      const actual = hero.health;
      assert.strictEqual(actual, 100)
    });

    it("Should have a favourite food", function(){
      const actual = hero.favouriteFood;
      assert.strictEqual(actual, "Hot Dogs")
    });

    it("Should start with no tasks", function(){
      const actual = hero.tasks;
      assert.deepStrictEqual(actual, [])
    });

    it("Should be able to talk", function(){
      const actual = hero.talk();
      assert.strictEqual(actual, "Hello, I am Charlie!")
    });

})
