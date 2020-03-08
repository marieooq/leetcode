/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  let prefix = '';
  if (strs.length === 0) return prefix;
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (char !== strs[j][i]) return prefix;
    }
    prefix += char;
  }
  return prefix;
};

// longestCommonPrefix(['flower', 'flow', 'flight']);
console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
