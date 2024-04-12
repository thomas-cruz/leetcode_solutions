/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

 

Constraints:

    The number of nodes in the list is in the range [0, 100].
    0 <= Node.val <= 100

Approach

   1. Check if the list is empty or contains only one node. If so, there is no need to perform any swaps, so the original head is returned.
   2. Initialize three pointers: newHead to store the new head after swapping, prev to keep track of the previous node, and curr to iterate through the list.
   3. Enter a loop that continues as long as both curr and curr->next are not null.
   4. Inside the loop, create a pointer next to store the next node after curr.
   5. Update the next pointers of curr and next to perform the swap. Set curr->next to next->next to connect curr with the next pair of nodes.
   6. Set next->next to curr to swap the positions of curr and next.
   7. If prev is not null, update its next pointer to next to connect the previous pair with the swapped pair.
   8. Update prev to curr and curr to curr->next to move forward in the list.
   9. After the loop ends, return newHead, which stores the new head of the swapped list.

Complexity

    Time complexity: O(n)

    Space complexity: O(1)

The time complexity of this algorithm is O(n), where n is the number of nodes in the linked list. This is because the algorithm iterates through the list once. The space complexity is O(1) because it uses a constant amount of additional space to store the pointers.

*/
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
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    var newHead = head.next;
    var prev = null;
    var curr = head;
    
    while (curr && curr.next) {
        var next = curr.next;
        curr.next = next.next;
        next.next = curr;
        
        if (prev) {
            prev.next = next;
        }
        
        prev = curr;
        curr = curr.next;
    }
    
    return newHead;
};
