/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // list1 and list2 are heads of sorted linked lists
    // return one merged sorted linked list of the two heads
    // Input: list1 = [1,2,4], list2 = [1,3,4] Output: [1,1,2,3,4,4]
    // create two clones of list1
    // loop through list1 while it is true
    // if list1.val is lesser or equal to list2.val then set clone.next = list1.val and iterate list1
    // else clone.next = list2.val and iterate list2 
    // iterate clone node
    // when the loop breaks return clone2
    let clone1 = new ListNode, clone2 = clone1;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            clone1.next = list2;
            list2 = list2.next;
            break;
        } else if (list2 === null) {
            clone1.next = list1;
            list1 = list1.next;
            break;
        }
        if (list1.val <= list2.val) {
            clone1.next = list1;
            clone1 = clone1.next;
            list1 = list1.next;
        } else {
            clone1.next = list2;
            clone1 = clone1.next;
            list2 = list2.next;
        }
    }
    return clone2.next;
};