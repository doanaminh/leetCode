/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let clone = new ListNode(0, head), clone2 = clone, sizeNode = head, size = 0, i = 0;
    while (sizeNode) {
        size++;
        sizeNode = sizeNode.next;
    }
    const nth = size - n;
    while (i < nth) {
        clone2 = clone2.next;
        i++;
    }
    clone2.next = clone2.next.next;
    return clone.next;
};