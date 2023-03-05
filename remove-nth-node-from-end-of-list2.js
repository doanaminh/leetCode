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
    // head is the head node of a linked list and n is the nth node from the end that should be removed
    // return the linked list without nth node
    // Input: head = [1,2,3,4,5], n = 2 Output: [1,2,3,5]
    // create a new linked list with a starting node and next value as head
    // this will create a linked list with an extra node in the beginning
    // create a clone of the new linked list
    // create a pointer that will be a second clone of the new linked list
    // iterate the pointer n times
    // then iterate the clone and the pointer until the pointer becomes null
    // the clone should be on the node before the one that should be deleted
    // update the next value of the the current clone node to clone.next.next
    // return the new linked list's next value
    let res = new ListNode(0, head), l = res, r = res;
    for (i = 0; i < n; i++) {
        r = r.next;
    }
    while (r.next !== null) {
        l = l.next;
        r = r.next;
    }
    l.next = l.next.next;
    return res.next;
};