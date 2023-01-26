var middleNode = function(head) {
    let fast = head;
    let slow = head;
    while (fast) {
        if (!fast.next) {break;}
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};