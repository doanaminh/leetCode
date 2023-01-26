/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let size = 0;
    let sizeHead = head;
    while (sizeHead) {
        size++;
        sizeHead = sizeHead.next;
    }
    let map = {};
    let max = 0;
    let count = 0;
    let h1 = head;
    while (h1) {
        if (count < size / 2) {
            map[count] = h1.val;
        } else {
            const twin = size - 1 - count;
            map[twin] += h1.val;
            max = Math.max(max, map[twin]);
        }
        h1 = h1.next;
        count++;
    }
    return max;
};