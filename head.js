let array = [];
const head = function(array) {
  let head = array[0];
  console.log(array);
  return head;

};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }



};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
//console.log(head([5,6,7]));
//console.log(head(["Hello", "Lighthouse", "Labs"]));
