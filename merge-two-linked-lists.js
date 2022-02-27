/***** Problem
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Constraints:
    The number of nodes in both lists is in the range [0, 50].
    -100 <= Node.val <= 100
    Both list1 and list2 are sorted in non-decreasing order.
*****/
/***** Solution
Compare the first elements of each list. I take whichever element is smaller and put it into a new linked list.
If one list was shorter than the other, then there are no longer two elements to compare. 
Therefore add the longer linked list to the end of the new linked list.
*****/

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
    let head = new ListNode(0);
    let currentNode = head; 

    while(list1 !== null && list2 !== null){

        if(list1.val < list2.val){ //get the smallest one
            currentNode.next = list1;
            list1 = list1.next
        } else { //otherwise just continue
            currentNode.next = list2
            list2 = list2.next
        }

        currentNode = currentNode.next
    }

    if(list1 !== null) {
        currentNode.next = list1;
    } else if (list2 !== null) {
        currentNode.next = list2
    }

    return head.next
};
