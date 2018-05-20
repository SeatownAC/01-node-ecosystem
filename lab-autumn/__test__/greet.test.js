const greet = require('../lib/greet.js');

describe('greet module', () => {

    
    it('should return null when passed non string', () => {

    expect(greet()).toBeNull();

  });
    it('should return hello world', () => {
    
    expect (greet('World')).toEqual('Hello, World');
  });



});