const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  let stringsArr = new Array(options.repeatTimes).fill(str + '');
  let additionArr;

  if (options.addition === undefined) {
    additionArr = new Array(options.additionRepeatTimes).fill('');
  } else {
    additionArr = new Array(options.additionRepeatTimes).fill(options.addition + '');
  }
  
  if (options.additionSeparator === undefined) {
    additionArr = additionArr.map((element, index) => {
      if (index == additionArr.length - 1) {
        return element
      } else {
        return element + '|'
      } 
    })
  } else {
    additionArr = additionArr.map((element, index) => {
      if (index == additionArr.length - 1) {
        return element
      } else {
        return element + options.additionSeparator
      } 
    })
  }

  stringsArr = stringsArr.map(element => {
    return element + additionArr.join('')
  })

  if (options.separator === undefined) {
    stringsArr = stringsArr.map((element, index) => {
      if (index == stringsArr.length - 1) {
        return element
      } else {
        return element + '+'
      } 
    })
  } else {
    stringsArr = stringsArr.map((element, index) => {
      if (index == stringsArr.length - 1) {
        return element
      } else {
        return element + options.separator
      } 
    })
  }

  return stringsArr.join('');
}

module.exports = {
  repeater
};
