/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    // head is the head node of the linked list
    // return the middle node of the linked list 
    // if the size of the linked list is even then return the 2nd middle node
    // clone the head node
    // loop through the head 
    // and loop through the clone at twice the speed/iteration
    // once the clone becomes null return the node that the original head node is on
    let clone = head;
    while (clone) {
        if (clone.next == null) break;
        clone = clone.next.next;
        head = head.next;
    }
    return head;
};