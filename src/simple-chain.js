const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    const newChainElement = value || value === null || value === 0 || value === false || Number.isNaN(value)
    ? `( ${value} )`
    : '(  )';

    this.chain.push(newChainElement);

    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error("You can\'t remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const resultChain = this.chain.join('~~');
    this.chain = [];

    return resultChain;
  }
};

module.exports = {
  chainMaker
};
