/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Example 2:

Input: n = 2
Output: false

 

Constraints:

    1 <= n <= 231 - 1

Intuition

We are told that a happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.

The cyclical nature of the question means that we will get stuck in a loop if we can't account for the cycle effectively.

To solve for this we can employ the two-pointer technique, specifically through the utilization of the Floyd's cycle finding algorithm, also known as the Hare-Tortoise algorithm.

image

This technique is applied to identify a loop. By utilizing two pointers one advancing at twice the speed of the other. The swifter pointer is termed "fast," while the remaining one is referred to as the "slow" pointer.

Applying this to the problem, if a number is a happy number (reaches 1), the process will eventually enter a cycle that includes 1. On the other hand, if it's not a happy number and the process enters a non-1 cycle, the fast and slow will meet within that cycle. This indicates that the number does not lead to a happy state.
Approach

    Initialize two-pointers with n.
    Move the slow pointer by one position.
    Move the fast pointer by two positions.
    We will calculate the sum of the squares with a helper function sumOfSquares to do the following.
        Extract the last digit.
        Add the square of the digit to the sum.
        Remove the last digit.
    If both pointers meet at some point then a loop exists and if the fast pointer meets the end position then no loop exists.

Complexity

    Time complexity: O(log n)

    Space complexity: O(1)
*/
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if(n == 1) return true; // Base case: 1 is a happy number

    let slow = n; // Initialize slow pointer with n
    let fast = n; // Initialize fast pointer with n

    while(true){
        // Move slow pointer by one step and fast pointer by two steps
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
        // If the pointers meet, a cycle is detected
        if(slow == fast) break;
    }
    // If the cycle reaches 1, then n is a happy number
    return slow == 1;
};

function sumOfSquares(num){
    let sum = 0;
    while(num > 0){
        let last_diget = num % 10; // Extract the last digit
        sum += last_diget**2; // Add the square of the digit to the sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
}
