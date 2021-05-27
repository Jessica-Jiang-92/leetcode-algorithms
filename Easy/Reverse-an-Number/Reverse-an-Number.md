## 1. 问题描述

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）a。

## 2. 测试用例

### Example 1:
```
Input: x = 123
Output: 321
```
### Example 2:
```
Input: x = -123
Output: -321
```

### Example 3:
```
Input: x = 120
Output: 21
```

### Example 4:
```
Input: x = 0
Output: 0
```

## 3. 解决方法

```
fun(num: number) {
    let result = 0;
    if (num > 2147483647 || num < -2147483647) {
      result = 0;
    } else {
      const arr = num.toString().split('');
      if (arr[0] === '-') {
        result = -parseInt(arr.reverse().join(''));
      } else {
        result = parseInt(arr.reverse().join(''));
      }
    }

    return result > 2147483647 || result < -2147483647 ? 0 : result;
  }
  解析：首先是边界条件判断，接着我们将数字转换成字符串并进行分割，之后判断数字的正负，使用数组的reverse函数性质，将其翻转之后在转换成整数。
  尤其需要注意的是转换后的数字，仍然需要检查是否在可容许的范围内，否则无法通过提交。
  这种解法的时间复杂度是：`O(n)`
```
![1620873648](https://user-images.githubusercontent.com/82437559/118069995-b91da380-b3d7-11eb-9ebf-e99743506db3.png)




