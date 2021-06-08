## 1. 题目描述

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。

## 2. 测试用例
示例 1：
```
输入：x = 121
输出：true
```
示例 2：
```
输入：x = -121
输出：false
解释：从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```
示例 3：
```
输入：x = 10
输出：false
解释：从右向左读, 为 01 。因此它不是一个回文数。
```

示例 4：
```
输入：x = -101
输出：false
```
## 3. 解决方案

```
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(num) {
    let result = false;
    const arr = num.toString().split('');
    const len = arr.length;
    if (arr[0] === '-') {
      result = false;
    } else {
      const str = arr.reverse();
      if (parseInt(str.join('')) == num) {
        result = true;
      }
    }
    return result;
};
```
![1620875353](https://user-images.githubusercontent.com/82437559/118072158-d94f6180-b3db-11eb-8346-fcfb85ab7b8c.png)





