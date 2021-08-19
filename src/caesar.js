// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if(!shift || shift == 0 || shift > 25 || shift < -25) return false;
    let inputArray = input.toLowerCase().split(''); 
     return inputArray.map(character => {
      if(character.match(/[a-z]/g)) { // if statement for characters that are between a-z
        character = encode ? character.charCodeAt() + shift : character.charCodeAt() - shift; // when encoding, characters move to the right by 'shift' amount, and vice-versa for decoding
        character = character > 122 ? character -= 26 : character; // ensuring letters wrap back around the alphabet
        character = character < 97 ? character += 26 : character; // ensuring letters wrap back around the alphabet
        return String.fromCharCode(character);
      } else {
        return character
      }
    })
    .join('')  
  }

// console.log(caesar("thinkful", -26))
// console.log(String.fromCharCode(106));
// console.log(('a').charCodeAt())

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// /[a-z]/i