// 两数之和
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = new Map();
    for (let i = 0; i < nums.length; i++) {
      let remain = target - nums[i];
      if (result.has(remain)) {
        return [result.get(remain), i];
      }
      result.set(nums[i], i);
    }
    return result;
};




