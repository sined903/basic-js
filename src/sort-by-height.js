const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const oneIndex = [];

  arr.forEach((element, index) => {
    if(element === -1) {
      oneIndex.push(index)
    }
  })

  oneIndex.forEach((element) => {
      arr.splice(arr.indexOf(-1), 1)
  });

  arr.sort((a,b) => {return a-b});

  oneIndex.forEach(element => {
    arr.splice(element, 0, -1)
  })

  return arr
}

module.exports = {
  sortByHeight
};
