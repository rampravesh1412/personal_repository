// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log([i, j]);
//       }
//     }
//   }
// };

// twoSum([2, 7, 11, 15], 9);

// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         console.log([i, j]);
//       }
//     }
//   }
// };


var twoSum = function (nums, target) {
  const indices = {};
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    if (difference in indices) {
      return [indices[difference], i];
    }
    indices[nums[i]] = i;
  }
  return [];
};

console.log(twoSum([3, 2, 4], 6));
