/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === undefined || needle === '') return 0;
  const result = haystack.indexOf(needle);
  return result;
};

console.log(strStr('hello'));
