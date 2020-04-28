/**
 * @param {number[]} nums
 * @return {number}
 */
// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

//reference: https://github.com/iponkan/leetcode-js/blob/master/problems/53.maximum-sum-subarray-en.md

const helper = (list, m, n) => {
  if (m === n) return list[m];
  let sum = 0;
  let lmax = -Number.MAX_VALUE;
  let rmax = -Number.MAX_VALUE;
  const mid = ((n - m) >> 1) + m;
  const l = helper(list, m, mid);
  const r = helper(list, mid + 1, n);
  for (let i = mid; i >= m; i--) {
    sum += list[i];
    if (sum > lmax) lmax = sum;
  }
  sum = 0;

  for (let i = mid + 1; i <= n; i++) {
    sum += list[i];
    if (sum > rmax) rmax = sum;
  }
  return Math.max(l, r, lmax + rmax);
};

const maxSubArray = nums => {
  return helper(nums, 0, nums.length - 1);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
