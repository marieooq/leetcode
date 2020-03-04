const twoSum = (nums, target) => {
  let total = 0;
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      total = nums[i] + nums[j];
      if (total === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

const nums = [2, 0, 11, 7];
const target = 9;

console.log(twoSum(nums, target));
