var removeDuplicates = function(nums) {
  if (nums === null || nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let count = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i + 1]) {
      count++;
      nums[count] = nums[i + 1];
    }
  }
  return count;
};

removeDuplicates([0, 1, 1, 2, 2, 3, 3, 3]);
