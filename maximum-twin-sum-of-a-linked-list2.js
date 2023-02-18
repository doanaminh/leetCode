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
    // head is a node head
    // n is the size of the linked list
    // twin of a node is represented by n - 1 - ith node
    // twin sum is the sum of the node's value and the value of the twin node's
    // linked list will always have an even number of nodes
    // return the max twin sum of a linked list
    // find the size of the linked list
    // clone the head and declare a size variable to count the nodes inside the linked list
    // loop through the cloned list and iterate the size variable
    // declare a max sum variable
    // declare a hashmap
    // declare an iterator variable
    // loop through the linked list 
    // if the iterator is currently less than half of the size then add that value to the hashmap
    // else add the value of the current node to the twin nodes value in the hashmap
    // update the max variable 
    // after the loop is finished return the max variable
    let size = 0;
    let clone = head;
    while (clone) {
        size++;
        clone = clone.next;
    }
    let max = -Infinity;
    let i = 0;
    const map = {};
    while (head) {
        const twin = size - 1 - i;
        if (i < size/2) {
            map[i] = head.val;
        } else {
            map[twin] += head.val;
            max = Math.max(max, map[twin]);
        }
        head = head.next;
        i++;
    }
    return max;
};