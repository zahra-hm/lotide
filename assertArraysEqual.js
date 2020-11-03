

const eqArrays = function(arr1, arr2) {

  let i = 0;
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
  //console.log(answer);
};

const assertArraysEqual = function(actual, expected) {
  // actual is eqArray function
  if ((!actual && !expected) || (actual && expected)) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};


module.exports = assertArraysEqual;



//TEST

// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => PASS
// assertArraysEqual(eqArrays([1, 2, 3], [3, 9, 1]), false); // => PASS
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => PASS
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => FAIL