// Note that module.exports is an object representing this current module(multiply)
// multiply.js is a module named multiply.
module.exports = {
  // Test one failed when there was no multiply function
  // Fixed when we wrote the multiply function in multiply.

  //     multiply:  function  (a, b) {
  //         return 1;
  //     }

  // Test two failing

  // multiply:  function  (a, b) {
  //     return 1;
  // }

  // passing test for the rest of the cycles
  multiply(a, b) {
    return a * b;
  },

};
