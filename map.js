const words = ["ground", "control", "to", "major", "tom"];
const words1 = ["round", "basket", "to", "apple", "tom"];
const words2 = ["apple", "basket", "can", "don", "ellie"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words1, word => word[0]); //extra for test
const results3 = map(words2, word => word[0]); //extra for test

console.log(results1);
console.log("----");
console.log("TEST: " + map.words);
//

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
};

const assertArraysEqual = function(actual, expected) {
  if ((!actual && !expected) || (actual && expected)) {
    console.log("PASS");
  } else {
    console.log("FAIL");
  }
};

// TEST

assertArraysEqual(eqArrays(results1, [ 'g', 'c', 't', 'm', 't' ]), true); //should PASS if function works!
assertArraysEqual(eqArrays(results2, [ 'r', 'b', 't', 'a', 't' ]), true);
assertArraysEqual(eqArrays(results3, [ 'a', 'b', 'c', 'd', 'e' ]), true);