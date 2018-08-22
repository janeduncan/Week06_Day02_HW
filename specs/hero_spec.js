const assert = require("assert");
const Hero = require("../models/hero.js");
const Task = require("../models/task.js");
const Food = require("../models/food.js");

describe("Hero", function(){

  beforeEach(function(){
    hero = new Hero("Charlie", "Hot Dogs")
    task1 = new Task(4, 5, 50)
    task2 = new Task(10, 7, 60)
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

    it("Should be able to eat food", function(){
        const food = new Food("Orange", 30)
        hero.eatFood(food);
        const actual = hero.health;
        assert.strictEqual(actual, 130)
    });

    // it("Should sort by difficulty: hardest", function(){
    //   hero.sortByDifficulty()
    //   const actual = hero.tasks;
    //   assert.strictEqual(actual, [task2, task1])
    // });

})
