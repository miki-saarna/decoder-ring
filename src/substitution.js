// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz'

function rulesOfAlphabet(alphabet) { // helper function to filter out alphabet with incorrect length or characters that aren't all unique
  if(alphabet.length !== 26) return false;
  let obj = {};
  for(const character of alphabet) {
    if(obj[character]) return false;
    obj[character] = character;
}
}

function encoderAndDecoder(input, alphabet1, alphabet2) { // helper function to encode or decode
  let message = [];
    for(const character of input.toLowerCase()) {
      if(character === ' ') message.push(' ');
      for(let j = 0; j < alphabet1.length; j++) {
        if(character === alphabet1[j]) {
          message.push(alphabet2[j]);
        }
      }
    }
    return message.join('');
  }

  function substitution(input, alphabet, encode = true) {
    if(rulesOfAlphabet(alphabet) === false) return false;
    return encode ? encoderAndDecoder(input, originalAlphabet, alphabet) : encoderAndDecoder(input, alphabet, originalAlphabet); // ternary operator to determine to encode or decode
        }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
