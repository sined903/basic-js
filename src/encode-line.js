const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const codeObj = [];
  let count = 1;

  const strToArr = str.split('');

  strToArr.forEach((element, index) => {
    if (strToArr[index + 1] === element) {
      count++;
    } else {
      codeObj.push(count + element);
      count = 1;
    }
  })

  return codeObj.join('').replace(/1/g, '');
}

module.exports = {
  encodeLine
};
