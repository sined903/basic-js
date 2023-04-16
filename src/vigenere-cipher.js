const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor (reverse) {
    this.reverse = reverse;
  }

  codeWord (...args) {
    const code = [];

    let currentIndex = 0;
    args[0].split('').forEach((element) => {
      if (/\W/.test(element)) {
        code.push(element);
      } else if (/\d/.test(element)) {
        code.push(element);
      } else if (currentIndex >= args[1].length) {
        currentIndex = 0;
        code.push(args[1][currentIndex].toLowerCase());
        currentIndex++
      } else {
        code.push(args[1][currentIndex].toLowerCase())
        currentIndex++
      }
    });

    return code
  }

  encrypt(...args) {

    if(args[0] == undefined || args[1] == undefined) {
      throw new Error('Incorrect arguments!')
    }

    if (this.reverse === false) {
      args[0] = args[0].split('').reverse().join('');
    }

    const word = args[0].split('');
    const code = this.codeWord(args[0], args[1]);

    const codeWord = [];

    word.forEach((element, index) => {
      const codeSymbol = ((element.toLowerCase().charCodeAt() - 97) + (code[index].charCodeAt() - 97))%26;

      if (/\W/.test(element)) {
        codeWord.push(element)
      } else if (/\d/.test(element)) {
        codeWord.push(element)
      } else {
        codeWord.push(String.fromCharCode(codeSymbol + 97).toUpperCase())
      }
      
    });

    return codeWord.join('');
   
  }
  
  decrypt(...args) {
    
    if(args[0] == undefined || args[1] == undefined) {
      throw new Error('Incorrect arguments!')
    }

    if (this.reverse === false) {
      args[0] = args[0].split('').reverse().join('');
    }

    const codeWord = args[0].toLowerCase().split('');
    const code = this.codeWord(args[0], args[1]);

    const word = [];

    codeWord.forEach((element, index) => {


      let codeSymbol = ((element.toLowerCase().charCodeAt() - 97) - (code[index].charCodeAt() - 97));

      if (codeSymbol < 0) {
        codeSymbol += 26
      }

      if (/\W/.test(element)) {
        word.push(element)
      } else if (/\d/.test(element)) {
        word.push(element)
      } else {
        word.push(String.fromCharCode(codeSymbol + 97).toUpperCase())
      }
      
    });

    return word.join('');
  }


}

/* const v = new VigenereCipheringMachine(false);

console.log(v.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')) */

module.exports = {
  VigenereCipheringMachine
};
