## 题目描述

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

## 测试用例

### Example1

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```
### Example2

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

### Example3

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## 解法

```
var twoSum = function(nums, target) {
    const result = [];
    for (let i = 0; i <= nums.length; i++) {
      for (let j = 1; j <= nums.length; j++) {
        if (nums[i] + nums[j] === target && i !== j) { // 注意要求是i和j不能相等，从第三个测试用例就可以看出来
          result[0] = i;
          result[1] = j;
        }
      }
    }
    return result;
};
```






