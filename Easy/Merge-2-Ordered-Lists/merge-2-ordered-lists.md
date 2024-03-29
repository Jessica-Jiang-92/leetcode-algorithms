## 1. 题目描述

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

提示：
- 两个链表的节点数目范围是 [0, 50]
- -100 <= Node.val <= 100
- l1 和 l2均按非递减顺序排列


## 2. 测试用例

![合并2个有序链表](https://user-images.githubusercontent.com/82437559/120147888-fc6e7380-c219-11eb-937c-49a51f9504f3.png)
```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```
示例 2：
```
输入：l1 = [], l2 = []
输出：[]
```
示例 3：
```
输入：l1 = [], l2 = [0]
输出：[0]
```

## 3. 解决方案

### 📝3-1 分析

采用递归的思想。
我们可以按照如下的递归方法来定义2个链表的merge操作（忽略边界情况，比如空链表）：

![递归](https://user-images.githubusercontent.com/82437559/120414074-fa2c2680-c38b-11eb-9975-3489c314ded2.png)

也就是：两个链表头部值较小的一个节点与剩下的元素的merge操作结果合并。

我们对上述递归过程进行建模，同时需要考虑边界的情况。
- 如果l1或者l2一开始就是空链表，那么没有任何操作需要合并，所以我们只需要返回非空链表。
- 否则，我们要判断l1和l2哪一个链表的头结点的值更小，然后递归地决定下一个添加到结果里的节点。
- 如果2个链表有一个为空，递归结束。

### 📝3-2 代码
```
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```
![递归](https://user-images.githubusercontent.com/82437559/120414955-5a6f9800-c38d-11eb-9d85-ca7c3086b535.png)

### 📝3-3 复杂度分析

- 时间复杂度：`O(n+m)`，其中n和m分别表示2个链表的长度。因为每次调用递归都会去调l1或者l2的头结点（知道至少有一个链表为空），
函数`mergeTwoLists`至多只会递归调用每个节点一次。因此，时间复杂度取决于合并后的链表长度，即`O(n+m)`。
- 空间复杂度：`O(n+m)`，其中n和m分别表示2个链表的长度。递归调用函数`mergeTwoLists`时需要消耗栈空间，栈空间的大小取决于递归
调用的深度。结束递归式，函数`mergeTwoLists`最多调用了n+m次，所以空间复杂度为：`O(n+m)`。




