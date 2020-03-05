const reverse = x => {
  const strX = x.toString();
  const strArr = [...strX];
  let sign = '';
  if (strArr[0] === '-') {
    sign = '-';
  }
  const reverseStr = strArr.reverse().reduce((a, b) => a + b);
  let result = parseInt(reverseStr);
  if (sign === '-') {
    result = -result;
  }
  if (Math.pow(-2, 31) <= result && result <= Math.pow(2, 31)) {
    return result;
  } else {
    return 0;
  }
};

console.log(reverse(120));
console.log(reverse(1534236469));
