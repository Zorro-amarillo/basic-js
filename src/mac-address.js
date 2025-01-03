const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.length !== 2 * 6 + 5) {
    return false;
  }

  for (let i = 2; i < n.length; i += 3) {
    if (n[i] !== '-') {
      return false;
    }
  }

  const nArr = n.split('-');
  const regex = /[0-9a-f]/gi;

  return nArr.every(item => item.match(regex).length === 2);
}

module.exports = {
  isMAC48Address
};
