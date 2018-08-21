const assert = require("assert");
const Task = require("../models/task.js");

describe("Task", function(){

  beforeEach(function(){
    task = new Task(10, 5, 50)
  });

    it("Should have a difficulty level", function(){
      const actual = task.difficulty;
      assert.strictEqual(actual, 10)
    });

    it("Should have an urgency level", function(){
      const actual = task.urgency;
      assert.strictEqual(actual, 5)
    });

    it("Should have a reward", function(){
      const actual = task.reward;
      assert.strictEqual(actual, 50)
    });

    it("Should start not completed", function(){
      const actual = task.isComplete;
      assert.strictEqual(actual, false)
    });

})
