
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
      answer = false;
    }
  }
  return answer;

};

const assertArraysEqual = function(actual, expected) {
  // actual is eqArray function
  if ((!actual && !expected) || (actual && expected)) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};


const letterPosition = function(string) {
  let final = {};
  for (let i = 0; i < string.length; i++) {
    
    if (string[i] !== " ") {
      if (final[string[i]]) {
        final[string[i]].push(i);
      } else {
        final[string[i]] = [i];
      }
    }
  }
  return final;

};

const result = letterPosition("hello");

//TEST

console.log(assertArraysEqual(eqArrays(result.e, [1]), true));
console.log(assertArraysEqual(eqArrays(result.l, [2, 9]), true));
