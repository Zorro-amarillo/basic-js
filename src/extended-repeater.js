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
  const anyStr = '' + str;
  const repeatTimes = options.repeatTimes ?? 1;
  const stringSeparator = options.separator ?? '+';
  const stringAddition = (options.addition || options.addition === null || options.addition === false)
    ? '' + options.addition
    : '';
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? '|';

  const additionString = (additionSeparator.length === 0)
    ? `${stringAddition}${additionSeparator}`
      .repeat(additionRepeatTimes)
      .slice(0)
    : `${stringAddition}${additionSeparator}`
      .repeat(additionRepeatTimes)
      .slice(0, -additionSeparator.length);

  const result = (stringSeparator.length === 0)
    ? `${anyStr}${additionString}${stringSeparator}`
      .repeat(repeatTimes)
      .slice(0)
    : `${anyStr}${additionString}${stringSeparator}`
      .repeat(repeatTimes)
      .slice(0, -stringSeparator.length);

  return result;
}

module.exports = {
  repeater
};
