/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  const char_to_int = roman => {
    switch (roman) {
      case 'I':
        return 1;
      case 'V':
        return 5;
      case 'X':
        return 10;
      case 'L':
        return 50;
      case 'C':
        return 100;
      case 'D':
        return 500;
      case 'M':
        return 1000;
      default:
        return -1;
    }
  };
  if (s === null) return;
  const arr = [...s];
  let resultNum = char_to_int(arr[0]);
  let pre, curr;

  for (let i = 1; i < arr.length; i++) {
    curr = char_to_int(arr[i]);
    pre = char_to_int(arr[i - 1]);
    if (curr <= pre) {
      resultNum += curr;
    } else {
      resultNum = resultNum - pre * 2 + curr;
    }
  }
  return resultNum;
};

console.log(romanToInt('XC'));

// var romanToInt = function(s) {
//   const romanToIntObj = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };
//   let result = 0;
//   const arr = [...s];
//   for (valInArgs of arr) {
//     if (valInArgs === 'I') {
//       result += 1;
//     } else if (valInArgs === 'V') {
//       if (result === 1) {
//         result = 5 - result;
//       } else {
//         result += 5;
//       }
//     } else if (valInArgs === 'X') {
//       if (result === 1) {
//         result = 10 - result;
//       } else {
//         result += 10;
//       }
//     } else if (valInArgs === 'L') {
//       if (result === 10) {
//         result = 50 - result;
//       } else {
//         result += 50;
//       }
//     } else if (valInArgs === 'C') {
//       if (result === 10) {
//         result = 100 - result;
//       } else {
//         result += 100;
//       }
//     } else if (valInArgs === 'D') {
//       if (result === 100) {
//         result = 500 - result;
//       } else {
//         result += 500;
//       }
//     }
//   }

//   console.log(result);
// };

// romanToInt('XLI');
