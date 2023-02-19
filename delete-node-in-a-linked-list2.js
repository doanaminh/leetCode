/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // node is the node that needs to be deleted
    // not given access to the head of the linked list
    // linked list values are unique
    // node cannot be the tail node of the linked list
    // reroute the node
    // make the value of the node the value of the next node
    // make the next of the node the next of the next node
    node.val = node.next.val;
    node.next = node.next.next;
};