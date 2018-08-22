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

Hero.prototype.sortByDifficultyHardest = function() {
  this.tasks.sort(function(a, b){
    return b.difficulty - a.difficulty;
    }
  )
}

module.exports = Hero;
