
const tail = function(array) {
  let tail = array.slice(1);
  return tail;

};
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }
};

module.exports = tail;

// This doesn't change the assertEqual function, but instead compares the each item in the array, and the length of the arrays, to see if they're equal

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

/* This also works to compare the arrays by changing the assertEqual function

const assertEqual = function(actual, expected) {

  if (actual.join() === expected.join()) {
    //console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual.join() !== expected.join()) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }

};


// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

*/