## 1. 题目描述

罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

|字符|I|V|X|L|C|D|M|
|----|----|----|----|----|----|----|----|
| 数值 | 1 | 5 | 10 | 50 | 100 | 500 | 1000 |

例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
- I 可以放在 V (5) 和 X  (10) 的左边，来表示 4 和 9。
- X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。  
- C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
即分别是：

|字符|IV|IX|XL|XC|CD|CM|
|----|----|----|----|----|----|----|
| 数值 | 4 | 9 | 40 | 90 | 400 | 900 |


给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

## 2. 测试用例

示例 1:
```
输入: "III"
输出: 3
```
示例 2:
```
输入: "IV"
输出: 4
```
示例 3:
```
输入: "IX"
输出: 9
```
示例 4:
```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```
示例 5:
```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
``` 

提示：

1 <= s.length <= 15
s 仅含字符 ('I', 'V', 'X', 'L', 'C', 'D', 'M')
题目数据保证 s 是一个有效的罗马数字，且表示整数在范围 [1, 3999] 内
题目所给测试用例皆符合罗马数字书写规则，不会出现跨位等情况。
IL 和 IM 这样的例子并不符合题目要求，49 应该写作 XLIX，999 应该写作 CMXCIX 。
关于罗马数字的详尽书写规则，可以参考 罗马数字 - Mathematics 。
```
## 3. 解决方法

- 解法一

分析：
1. 首先，我们将6个特殊的罗马数字也看作跟普通的罗马数字一样，将它们一起存在一个对象中（下面的`romans`）。对应关系表示如下：

|字符|I|IV|V|IX|X|xl|L|XC|C|CD|D|CM|M|
|----|----|----|----|----|----|----|----|----|----|----|----|----|----|
| 数值 | 1 | 4 | 5 | 9 | 10 | 40 | 50 | 90 | 100 | 400 | 500 | 900 | 1000 |

2. 我们在给定的字符长度范围内遍历，先以2个字符的长度进行分割，判断分割的字符串是否在`romans`里面存在值？如果存在，则相加即可。
步长`i`加2；

3. 如果不存在，则只取单个字符求解其值（单个字符在`romans`中肯定有值），然后相加，步长`i`增加1。

```
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000,
    };
    let result = 0;
    for (let i = 0; i < s.length;) {
      if (i + 1 < s.length && romans[s.substring(i, i + 2)]) {
        result += romans[s.substring(i, i + 2)];
        i += 2;
      } else {
        result += romans[s.substring(i, i + 1)];
        i++;
      }
    }
    return result;
};
```
![1620981695](https://user-images.githubusercontent.com/82437559/118245400-54e00a00-b4d3-11eb-9a3c-bc85fc18b1b1.png)

- 解法二

分析：


```
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    if (s.includes('IV') || s.includes('IX')) {
      result -= 2;
    }
    if (s.includes('XL') || s.includes('XC')) {
      result -= 20;
    }
    if (s.includes('CD') || s.includes('CM')) {
      result -= 200;
    }

    for (let char of s) {
      switch (char) {
        case 'I':
          result += 1;
          break;

        case 'V':
          result += 5;
          break;

        case 'X':
          result += 10;
          break;
        case 'L':
          result += 50;
          break;

        case 'C':
          result += 100;
          break;

        case 'D':
          result += 500;
          break;

        case 'M':
          result += 1000;
          break;
      }
    }

    return result;
};
```


