/* eslint-disable no-undef */
const { assert } = require('chai');
const mult = require('../multiply');

// Test First TDD Cycle 1
// describe('multiply', () => {
//   it('multiply should return 1', () => {
//     const result = mult.multiply(1, 1);
//     assert.equal(result, 1);
//   });
// });

// Test First TDD Cycle 2
// assertEqual(multiply(2, 2),4);
// describe('multiply', function(){
//     it('multiply should return 4', function(){
//         let result = mult.
//         assert.equal(result, 4);
//     })

// });

// Test First TDD Cycle 3
// assertEqual(multiply(3, 3), 9);
// eslint-disable-next-line no-undef
// describe is used for the purpose of understanding the tests.
describe('multiply', () => {
  it('multiply should return 9', () => {
    const result = mult.multiply(3, 3);
    assert.equal(result, 9);
  });
});

// Fourth Test Cycle
// assertEqual(multiply(4, 4), 16)
describe('multiply', () => {
  it('multiply should return 16', () => {
    const result = mult.multiply(4, 4);
    assert.equal(result, 16);
  });
});

// Fifth Test Cycle
// assertEqual(multiply(23, 45), 23 * 45);
describe('multiply', () => {
  it('multiply should return 1035', () => {
    const result = mult.multiply(23, 45);
    assert.equal(result, 23 * 45);
  });
});
