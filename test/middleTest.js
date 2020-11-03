const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // PASS
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]); // PASS
assertArraysEqual(middle([1, 2, 3]), ["2"]); // FAIL
assertArraysEqual(middle([1, 2, 3, 4]), [3, 2]); // FAIL