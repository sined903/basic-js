const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {

  let removeDomen = email.slice(email.indexOf('@') + 1);
  
  if (removeDomen.includes('@')) {
    return getEmailDomain(removeDomen);
  } else {
    return removeDomen;
  }
  
}

module.exports = {
  getEmailDomain
};
