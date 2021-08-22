// Write your tests here!
const { expect } = require('chai');
const { substitution } = require('../src/substitution');

describe('substitution', () => {
    it('returns encoded message using original and substitute alphabet', () => {
      expect(substitution('piranha', "xoyqmcgrukswaflnthdjpzibev")).to.equal('nuhxfrx');
    })
    it('returns decoded message using original and substitute alphabet', () => {
        expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal('thinkful')
    })
    it('returns false if alphabet argument contains less than 26 characters', () => {
      expect(substitution('hilo', 'klsadjfalksdjfs#@)*($k')).to.be.false;
    })
    it('returns false if alphabet arugment contains characters that occur more than once', () => {
      expect(substitution('Thinkful Student', 'aaaamcgrukswaflnthdjpzibev')).to.be.false;
    })
    it('maintains spaces during encoding or decoding', () => {
      expect(substitution('hello world and universe!', "xoyqmcgrukswa!lnthdjpzibev", false)).to.be.a('string').that.includes(' ');
    })
    it('capital letters are encoded or decoded as if they are equivalent to their lowercase counterparts', () => {
      expect(substitution('HiYaAAA!', '$bc%efghijk@mnop12stuvwx!9', false)).to.be.equal(substitution('hiyaaaa!', '$bc%efghijk@mnop12stuvwx!9', false))
    })
})