const Food = function(name, replenishment) {
  this.name = name,
  this.replenishment = replenishment,
  this.isPoisonous = false
}

Food.prototype.touchedByDirtyWeeRatBastard = function() {
  this.isPoisonous = true;
}

module.exports = Food;
