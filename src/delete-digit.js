const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numToStr = n.toString();

  const numArr = numToStr.split('').fill(numToStr).map((element, index) => {
    if (index === 0) {
      return +element.slice(0, index-1)
    } else {
      return +(element.slice(0, index-1) + element.slice(index));
    }
  }).sort((a,b) => {
    return a - b;
  })

  return numArr[numArr.length - 1]
}


module.exports = {
  deleteDigit
};
