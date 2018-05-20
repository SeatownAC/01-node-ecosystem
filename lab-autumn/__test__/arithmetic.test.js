const arithmetic = require('../lib/arithmetic.js');

describe('adding function', () => {

  it('return the sum of two numbers', () => {
    let a = 2;
    let b = 2;
    let expected = 4;
    expect(arithmetic.add(a, b)).toBe(expected);
  });

  it('return null if passed a non number', () => {
    let str = 'not a number';
    let a = 2;
    expect(arithmetic.add(str,a)).toBeNull();
  });

  it ('return null if passed a boolean', () => {
    let msg = true;
    let a = 2;
    expect(arithmetic.add(msg,a)).toBeNull();
  });
});

describe('subtraction function', () => {

  it('return the remainder after the second number is subtracted from first', () => {
    let a = 2;
    let b = 2;
    let expected = 0;
    expect(arithmetic.sub(a, b)).toBe(expected);
  });

  it('return null when passed a non number', () => {
    let str = 'not a number';
    let b = 2;
    expect(arithmetic.sub(str, b)).toBeNull();
  });
});
