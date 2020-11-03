
const head = function(array) {

  return array[0]

};

const assertEqual = require('./assertEqual');

// TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Helloo");
//console.log(head([5,6,7]));
//console.log(head(["Hello", "Lighthouse", "Labs"]));

module.exports = head;