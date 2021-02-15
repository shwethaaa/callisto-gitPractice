var starWarsName = require("./starwars-names.json");
var uniqueRandomArray = require("unique-random-array");

module.exports = {
  all: starWarsName,
  random: uniqueRandomArray(starWarsName),
};
