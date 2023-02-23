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
    // head is head node of a singly linked list
    // return true if the linked list has a cycle else return false
    // Input: head = [3,2,0,-4], pos = 1 Output: true
    // clone head
    // loop through clone
    // as long as clone is not null and clone.next is not null
    // iterate through head by one node
    // iterate through clone by two nodes
    // if head is ever equal to clone return true
    // if not then the loop will end
    // then return false

    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) return true;
    }
    return false;
};