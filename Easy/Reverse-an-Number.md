## 问题描述

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go
outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

## 测试用例

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

## 解决方法

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
```
