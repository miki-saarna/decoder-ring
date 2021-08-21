const { expect } = require('chai');
const { polybius } = require('../src/polybius')

describe('polybius', () => {
    it('returns encoded input', () => {
      expect(polybius('Thinkful')).to.equal('4432423352125413')
    }) 
    it('returns decoded input', () => {
      expect(polybius('4432423352125413', false)).to.equal('th(i/j)nkful')
    })
    it('returns false if decoding a string with an odd number of characters', () => {
        expect(polybius('443242335212541', false)).to.equal(false)
    })
    it('maintains spaces without decoding or encoding', () => {
        expect(polybius('Hello World')).to.equal('3251131343 2543241341')
    })
})