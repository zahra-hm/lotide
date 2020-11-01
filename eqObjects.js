const assertEqual = function(actual, expected) {

  if (actual === expected) {
    //console.log("✅✅✅ Assertion Passed: " + [actual] + " === " + [expected]);
    console.log(`✅✅✅ Assertion Passed: ${actual} ===  ${expected}`);

  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);

  }

};

const eqObjects = function(object1, object2) {
  object2Keys = Object.keys(object2);
  object1Keys = Object.keys(object1);
  //console.log(object2Keys);

  if (object1Keys.length === object2Keys.length) {
    for (const key of object1Keys) {
      if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false
  }  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), true); // => false
