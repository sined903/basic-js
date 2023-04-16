const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const copyArr = arr.slice(0);

  copyArr.forEach((element, index) => {

    if (element === '--discard-next' && typeof copyArr[index + 2] === 'string') {
      copyArr.splice(index, 1);
    }
    
    if (element === '--discard-prev') {

      if (index !== 0) {
        copyArr.splice(index - 1, 2);
      } else {
        copyArr.splice(index, 1);
      }

    } 
    
    if (element === '--discard-next') {

      if (index !== arr.length - 1) {
        copyArr.splice(index, 2);
      } else {
        copyArr.splice(index, 1);
      }

    }

    if (element === '--double-next') {

      if (index !== arr.length - 1) {
        copyArr.splice(index, 1, arr[index + 1])
      } else {
        copyArr.splice(index, 1);
      }
      
    } 
    
    if (element === '--double-prev') {
      console.log(copyArr[index])
      if (index !== 0) {
        copyArr.splice(index, 1, arr[index - 1])
      } else {
        copyArr.splice(index, 1);
      }

    } 
  })

  return copyArr
}

module.exports = {
  transform
};
