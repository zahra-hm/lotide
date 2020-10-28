const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }
};

const eqArrays = function(arr1, arr2) {

  let i = 0;
  let answer = Boolean;
  for (i = 0; i < arr1.length; i++) {

    if (arr1.length === arr2.length) {
      if (arr1[i] === arr2[i]) {
        answer = true;
      } else if (arr1[i] !== arr2[i]) {
        answer = false;
      }
    } else {
      answer = false
    }
  }

  /* This also works but doesn't maintain formatting when printing arrays
  
  if (answer === true) {
    console.log(`✅✅✅  ${arr1} is equal to ${arr2}!`)
  } else {
    console.log(`🛑🛑🛑  ${arr1} is NOT equal to ${arr2}!`)
  }
  */

  if (answer === true) {
    console.log("✅✅✅ ", arr1, " is EQUAL to ", arr2)
  } else {
    console.log("🛑🛑🛑 ", arr1, " is NOT EQUAL to ", arr2)
  }

};


eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);