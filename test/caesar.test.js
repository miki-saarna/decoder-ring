const { expect } = require('chai');
const { caesar } = require('../src/caesar');

describe('caesar', () => {
  it('should return an input with each letter shifted to the right a certain amount if encoding', () => {
    const input = 'dragonfly';
    const shift = 3;
    const expected = 'gudjrqiob';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
  })
  it('should return an input with each letter shifted to the left a certain amount if decoding', () => {
      const input = 'gudjrqiob';
      const shift = 3;
      const expected = 'dragonfly';
      const actual = caesar(input, shift, false);
      expect(actual).to.equal(expected);
  })
  it('properly wraps around the alphabet if a letter \'falls off\' beyond the alphabet while encoding', () => {
      const input = 'xyz';
      const shift = 3;
      const expected = 'abc';
      const actual = caesar(input, shift);
      expect(actual).to.equal(expected);
  })
  it('properly wraps around the alphabet if a letter \'falls off\' beyond the alphabet while decoding', () => {
    const input = 'abc';
    const shift = 3;
    const expected = 'xyz';
    const actual = caesar(input, shift, false);
    expect(actual).to.equal(expected);
})
it('properly reverses the direction of encoding or decoding when shift is equal to a negative integer', () => {
    const input = 'hello world';
    const shift = -5;
    const expected = 'czggj rjmgy';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
})
it('uppercase letters convert into lowercase letters and none-alphabetical characters should be maintained as they are', () => {
    const input = 'Hey!? What\'s up?#*$%';
    const shift = -5;
    const expected = 'czt!? rcvo\'n pk?#*$%';
    const actual = caesar(input, shift);
    expect(actual).to.equal(expected);
})
it('should return false if the shift value is undefined, equal to 0, greater than 25 or less than -25', () => {
    const input = "Yellow Cat";
    const shift = undefined;
    const expected = false
    const actual = caesar(input, shift);
    expect(actual).to.be.false;
})
it('maintains spaces and other nonalphabetical symbols', () => {
    expect(caesar('hello universe!@#$%', 3)).to.be.equal('khoor xqlyhuvh!@#$%')
})
})