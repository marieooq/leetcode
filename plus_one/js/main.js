/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let lastDigit = digits.length - 1;
  let i = lastDigit;
  let result = [...digits];
  while (i >= 0) {
    let addedVal;
    if (0 <= digits[i] && digits[i] <= 8) {
      addedVal = digits[i] + 1;
      result.splice(i, 1, addedVal);
      break;
    } else if (digits[i] === 9 && i === 0) {
      result.splice(i, 1, 0);
      result.unshift(1);
    } else if (digits[i] === 9) {
      result.splice(i, 1, 0);
    }
    i--;
  }
  return result;
};

console.log(plusOne([9, 9, 9, 9]));
