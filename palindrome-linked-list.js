/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // head is head of a linked list
    // return true if the linked list is a palindrome
    // Input: head = [1,2,2,1] Output: true
    // create a dummy head
    // find the size 
    // loop through the head
    // create a hashmap
    // if the size is even then add to the values of head to the hashmap until size/2
    // after that compare to see if the remainder matches the existing values in the hashmap
    // if they match then return true
    // else false
    // if the size is odd 
    // skip the iteration in the middle
    // and continue to do the same process as the even

    let size = 0;
    let sizeHead = head;
    while (sizeHead) {
        size++;
        sizeHead = sizeHead.next;
    }

    let map = {};
    let i = 0;
    while (head) {
        const twin = size - 1 - i;
        if (i < size/2) {
            map[i] = head.val;
        } else if (i < size/2 && i > size/2) {
            continue;
        } else {
            if (head.val !== map[twin]) {
                return false;
            }
        }
        i++;
        head = head.next;
    }
    return true;
};