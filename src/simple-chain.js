const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  currentMaker: [],
  getLength() {
    return this.currentMaker.length
  },
  addLink(value) {
    this.currentMaker.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position ^ 0) === position && position > 0 && position <= this.currentMaker.length) {
      this.currentMaker.splice(position - 1, 1)
      return this
    } else {
      this.currentMaker = [];
      throw new Error("You can't remove incorrect link!");
    }
  
  },
  reverseChain() {
    this.currentMaker.reverse();
    return this
  },
  finishChain() {
    let saveMaker = this.currentMaker;
    this.currentMaker = [];
    return saveMaker.join('~~');
  }
};

module.exports = {
  chainMaker
};
