const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }
};

const eqArrays = function(arr1, arr2) {
  //console.log(arr1.join())
  //console.log(arr2.join())
  //console.log("-----")
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
  return answer;

};


//TEST

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => FAIL