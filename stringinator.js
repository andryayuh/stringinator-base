const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, x => x === target).join('');
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, x => x === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, x => !isNaN(parseInt(x, 10)));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str, x => !isNaN(parseInt(x, 10))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  return _.map(obj, value => truncateString(value, maxLength));
};

const countChars = function(str) {
  // Your code goes here
};

const dedup = function(str) {
  // Your code goes here
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};