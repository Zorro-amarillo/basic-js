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
  const numArr = [];
  const nStr = n.toString();

  for (let i = 0; i < nStr.length; i++) {
    numArr.push(nStr.replace(nStr[i], ''));
  }

  return Math.max(...numArr);
}

module.exports = {
  deleteDigit
};
