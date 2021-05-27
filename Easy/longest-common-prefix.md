## 1. 题目描述

编写一个函数来查找字符串数组中的最长公共前缀。
如果不存在公共前缀，返回空字符串 ""。
提示：
- 0 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] 仅由小写英文字母组成

## 2. 测试用例

- 示例一 
```
输入：strs = ["flower","flow","flight"]
输出："fl"
```

- 示例二
```
输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
```
 ## 3. 解决方法
 
 - 方法一：逐个比较
 从前往后一次比较字符串，获取公共前缀。
![最长公共子串-1](https://user-images.githubusercontent.com/82437559/119455652-62678080-bd6c-11eb-9de1-8a34de0a0d80.png)
![最长公共子串-2](https://user-images.githubusercontent.com/82437559/119455657-65627100-bd6c-11eb-9cf4-0e9a7b849896.png)
![最长公共子串-3](https://user-images.githubusercontent.com/82437559/119455664-67c4cb00-bd6c-11eb-97a8-0fa74602893f.png)

```
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    let prevs = strs[0]
    for(let i = 1; i < strs.length; i++) {
        let j = 0
        for(; j < prevs.length && j < strs[i].length; j++) {
            if(prevs.charAt(j) !== strs[i].charAt(j)) break
        }
        prevs = prevs.substring(0, j)
        if(prevs === "") return ""
    }
    return prevs
};

此时：
1. 时间复杂度是：O(s)，s是所有字符串中字符数量的总和；
2. 空间复杂度是：O(1).
```

- 方法二：只需要比较最大字符串和最小的字符串的最长公共前缀，该方法比较容易理解，只需要我们找出最大和最小的字符串，再进行比较得出最长的公共前缀即可。
注意：这里的最大、最小字符串不是指最长和最短的字符串，需要比对字符的大小。

 获取数组中的最大值及最小值字符串，最小字符串与最大字符串的最长公共前缀也为其他字符串的公共前缀，即为字符串数组的最长公共前缀。
 例如 abc 、 abcd 、ab 、ac ，最小 ab 与最大 ac 的最长公共前缀一定也是 abc 、 abcd 的公共前缀。
 ![解法二](https://user-images.githubusercontent.com/82437559/119471316-c04f9480-bd7b-11eb-8435-e5e58e3889d0.png)

```
var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    if(strs.length === 1) return strs[0]
    let min = 0, max = 0
    for(let i = 1; i < strs.length; i++) {
        if(strs[min] > strs[i]) min = i
        if(strs[max] < strs[i]) max = i
    }
    for(let j = 0; j < strs[min].length; j++) {
        if(strs[min].charAt(j) !== strs[max].charAt(j)) {
            return strs[min].substring(0, j)
        }
    }
    return strs[min]
};

时间复杂度：O(n+m)，n是数组的长度， m 是字符串数组中最短字符的长度。
空间复杂度：O(1)。
```
分析：
1. 求最大和最小字符串
```
for(let i = 1; i < strs.length; i++) { // n 次循环
  if(strs[min] > strs[i]) min = i // 最坏情况下进行了 m 次对比, 每次对比是 O(1) 的时间开销
  if(strs[max] < strs[i]) max = i // 最坏情况下进行了 m 次对比
}
```
以上过程进行了n次循环，每次循环都进行了2m次单字符的比较操作，时间复杂度为：O(n*2m)
2. 对比最大和最小字符串
```
for(let j = 0; j < strs[min].length; j++) {  // m次循环
  if(strs[min].charAt(j) !== strs[max].charAt(j)) {   // O(1)的时间开销
    return strs[min].substring(0, j)
  }
}
```
分析可知：该部分的代码对比最大和最小字符串时进行了m次单字符的比较操作，时间复杂度为：O(m)。
合并两部分代码的时间复杂度，得到最差情况下这种解法的时间复杂度为：O(S)



图解方法参考：[https://leetcode-cn.com/problems/longest-common-prefix/solution/tu-jie-leetcodezui-chang-gong-gong-qian-zhui-lcp-b/](https://leetcode-cn.com/problems/longest-common-prefix/solution/tu-jie-leetcodezui-chang-gong-gong-qian-zhui-lcp-b/)
