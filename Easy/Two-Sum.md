## 1. 题目描述

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。


## 2. 测试用例

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

## 3. 解法
- 解法一

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
![1620870382](https://user-images.githubusercontent.com/82437559/118065778-20375a00-b3d0-11eb-8f32-a91f0e58d3ae.png)

从图上可以看出，上面这种方式运行效率不高，因为我们用了2层循环，这个时候的时间复杂度是`O(n^2)`，空间复杂度是:`O(1)`。
我们现在来考虑优化一下。

- 解法二
```
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

解析：通过哈希表的方式完成查找，在进行迭代并将元素插入到表中的同时，我们还会回过头来检查表中是否已经存在当前元素所对应的目标元素。
如果它存在，那我们已经找到了对应解，并立即将其返回。
```
![logo](https://user-images.githubusercontent.com/82437559/118067852-f3854180-b3d3-11eb-8dde-1401615a6463.png)







