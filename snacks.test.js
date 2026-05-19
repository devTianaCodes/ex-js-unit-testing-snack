const { sum, isEven } = require('./snacks');

test('sum adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});

test('isEven returns true for even numbers', () => {
  expect(isEven(4)).toBe(true);
});

test('isEven returns false for odd numbers', () => {
  expect(isEven(5)).toBe(false);
});
