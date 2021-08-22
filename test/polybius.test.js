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
        expect(polybius('443242335212541', false)).to.be.false
    })
    it('maintains spaces when encoding', () => {
        expect(polybius('Hello World')).to.equal('3251131343 2543241341')
    })
    it('maintains spaces when decoding', () => {
        expect(polybius('1432 1234', false)).to.be.a('string').that.includes(' ');
    })
    it('translates the letters "i" and "j" to "42" when encoding', () => {
        expect(polybius('i j')).to.be.equal('42 42')
    })
    it('translates "42" to "(i/j)" when decoding', () => {
        expect(polybius('42', false)).to.be.equal('(i/j)')
    })
    it('encodes uppercase letters as if they are equivalent to their lowercase letters', () => {
        expect(polybius('The Mountains ARE beAuTiFUL')).to.be.equal(polybius('the mountains are beautiful'))
    })
})