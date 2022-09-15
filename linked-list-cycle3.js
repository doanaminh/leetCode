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
    // head is the head of a singly linked list 
    // return true if there is a cycle inside the linked list else false
    // Input: head = [3,2,0,-4], pos = 1 Output: true
    // tortoise and hare method
    // clone the head to a fast and slow variable
    // loop through fast node
    // while fast AND fast.next is not null we continue the loop
    // if fast is ever equal to slow then a cycle exists within the linked list
    // this is due to number theory or something idk
    // if the loop ever breaks without returning true then return false
    // this means there is no cycle if the loop breaks
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};