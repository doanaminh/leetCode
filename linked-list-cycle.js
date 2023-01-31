/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let map = [];
    while (head) {
        if (map.includes(head)) {
            return true;
        } else {
            map.push(head);
        }
        head = head.next;
    }
    return false;
};