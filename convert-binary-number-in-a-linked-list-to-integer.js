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
var getDecimalValue = function(head) {
    // head is a node head
    // return the binary integer that is given in the form of a linked list as a decimal integer
    // Input: head = [1,0,1] Output: 5 
    // declare a variable to hold the values of the nodes
    // loop through the nodes and add the values to the variable
    // convert the variable to a decimal integer either using parseInt or manually 
    // manually converting a binary to a decimal integer requires adding each number starting at the first digit and multiplying the sum by 2 except the last digit
    
    let str = '';
    while (head) {
        str += head.val;
        head = head.next;
    }
    let res = 0;
    for (i = 0; i < str.length; i++) {
        if (i !== str.length - 1) {
            res += (+str[i]);
            res *= 2;
        } else {
            res += (+str[i])
        }
    }
    return res;
};