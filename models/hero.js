const Hero = function(name, favouriteFood) {
  this.name = name,
  this.health = 100,
  this.favouriteFood = favouriteFood,
  this.tasks = []
}

Hero.prototype.talk = function() {
  return `Hello, I am ${this.name}!`;
}

Hero.prototype.eatFood = function(food) {
  if (food.isPoisonous === true) {
    this.health -= 25;
  } else if (food.name === this.favouriteFood) {
      this.health += (food.replenishment * 1.5);
  } else {
      this.health += food.replenishment;
  }
}

// Hero.prototype.sortByDifficultyHardest = function() {
//   this.tasks.sort(function(taska, taskb){
//     return taskb.difficulty - taska.difficulty;
//     }
//   )
// }

// Hero.prototype.sortByDifficulty = function() {
//  function sortDifficulty(a, b) {
//    return a.difficulty - b.difficulty;
//  }
//  return this.tasks.sort(sortDifficulty);
// }

module.exports = Hero;
