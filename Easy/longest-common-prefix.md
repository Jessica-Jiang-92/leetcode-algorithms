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

- 方法二：只需要比较最长字符串和最短的字符串的最长公共前缀




图解方法参考：[https://leetcode-cn.com/problems/longest-common-prefix/solution/tu-jie-leetcodezui-chang-gong-gong-qian-zhui-lcp-b/](https://leetcode-cn.com/problems/longest-common-prefix/solution/tu-jie-leetcodezui-chang-gong-gong-qian-zhui-lcp-b/)
