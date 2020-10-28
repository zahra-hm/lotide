
const assertNew = function(arr1, arr2) {

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

  if (answer === true) {
    console.log("✅✅✅ ", arr1, " is EQUAL to ", arr2)
  } else {
    console.log("🛑🛑🛑 ", arr1, " is NOT EQUAL to ", arr2)
  }

};


let i = 0;
let n = 0;

const without = function(source, itemsToRemove) {
  let withoutArray = source;
  let arr = [];


  for (i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      arr.push(source[i]);
    }
  }
  return arr;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse", "world"]));
assertNew(words, ["hello", "world", "lighthouse"]);


console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([1, 2, 3], [1]));  // [2, 3]

