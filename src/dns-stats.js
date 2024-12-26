const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsList = [];
  const resObj = {};

  domains.map(item => {
    return item.split('.').reverse().reduce((result, elem) => {
      domainsList.push(`${result}.${elem}`);

      return `${result}.${elem}`;
    }, '');
  });

  const uniqueDomains = Array.from(new Set(domainsList));

  uniqueDomains.forEach(domain => {
    resObj[domain] = 0;
  });

  for (const key in resObj) {
    const searchTemplate = key.slice(1).split('.').reverse().join('.');

    const keyMatch = searchTemplate.includes('.')
      ? searchTemplate
      : `.${searchTemplate}`;

    domains.forEach(item => {
      if (item.includes(keyMatch)) {
        resObj[key] += 1;
      }
    });
  }

  return resObj;
}

module.exports = {
  getDNSStats
};
