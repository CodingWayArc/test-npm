const { greet, add } = require('../index');

describe('greet', () => {
  test('returns greeting with name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

describe('add', () => {
  test('adds two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});
