// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = [
    {1: 'a', 2: 'f', 3: 'l', 4: 'q', 5: 'v'},
    {1: 'b', 2: 'g', 3: 'm', 4: 'r', 5: 'w'},
    {1: 'c', 2: 'h', 3: 'n', 4: 's', 5: 'x'},
    {1: 'd', 2: '(i/j)', 3: 'o', 4: 't', 5: 'y'},
    {1: 'e', 2: 'k', 3: 'p', 4: 'u', 5: 'z'}
  ];
  function polybius(input, encode = true) {
    //if(!encode && input.length % 2 != 0) throw new Error('Input must have an even number of characters when decoding');
    const noSpace = input.split(' ').join('');
    if(!encode && noSpace.length % 2 != 0) return false
    let result = [];
    if(encode) {
      let characters = input.toLowerCase().split('');
      for (const letter of characters) {
        if (letter === ' ') result.push(' ');
      for (let i = 0; i < polybiusSquare.length; i++) {
        for (const [ k, v ] of Object.entries(polybiusSquare[i])) { // trying using Object.keys instead?
          if(polybiusSquare[i][k].includes(letter)) {
          result.push(i + 1, k)
          break;
          //result.push(k)
          } 
        }
      }  
    } 
    return result.join('');  
    } else {
      
      for (let i = 0; i < input.length; i += 2) {
        if (input.substr(0 + i, 1) === ' ') {
          result.push(' ')
          i -= 1;
        }
        else {
        const arrIndex = polybiusSquare[input.substr(0 + i, 1) - 1];
          for (const [ k, v ] of Object.entries(arrIndex)) { //try using Object.keys instead?
            //if(Object.keys(polybiusSquare[i][k]) === input.substr(0 + i, 2)) {
            if (input.substr(1 + i, 1) === ' ') {result.push(' ')}
            if (k === input.substr(1 + i, 1))
              result.push(arrIndex[k])
            }  
            }
          }
          return result.join('');
        }
      }
      
    
  return {
    polybius,
  };
})();

 /*try {
          polybius('1245', false)
        } catch (error) {
          console.log('Your error:', error.message)
        }*/

module.exports = { polybius: polybiusModule.polybius };
