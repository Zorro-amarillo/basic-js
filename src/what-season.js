const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let season;

  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    date.getTime();

    const month = date.getMonth();

    season = (month >= 2 && month < 5)
      ? 'spring'
      : (month >= 5 && month < 8)
      ? 'summer'
      : (month >= 8 && month < 11)
      ? 'autumn'
      : 'winter';
  } catch(error) {
    throw new Error('Invalid date!');
  }

  return season;
}

module.exports = {
  getSeason
};
