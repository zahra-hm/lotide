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
  return answer;

};

// const eqObjects = function(object1, object2) {
//   let object2Keys = Object.keys(object2);
//   let object1Keys = Object.keys(object1);
//   let answer;
//   // console.log(object1Keys);
//   // console.log(object1Keys.length);
//   // console.log(object2Keys.length);

//   if (object1Keys.length === object2Keys.length) {
//     for (const key of object1Keys) {
//       if (object1[key] === object2[key]) {
//         answer = true;
//       } else {
//         answer = false;
//       }
//     }
//   } else {
//     answer = false;
//   }  
//   return answer;
// };


const eqObjects = function(object1, object2) {
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return (eqArrays(object1[key],object2[key]));
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  return false;
};


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), false); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false


