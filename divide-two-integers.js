/*
Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

Return the quotient after dividing dividend by divisor.

Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, and if the quotient is strictly less than -231, then return -231.

 

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = 3.33333.. which is truncated to 3.

Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = -2.33333.. which is truncated to -2.

 

Constraints:

    -231 <= dividend, divisor <= 231 - 1
    divisor != 0


Idea:

(Note: Some have questioned whether or not bitwise shifts should count as multiplication/division, so I've added an alternate solution explanation taking advantage of the algebraic qualities of logarithms below in the Alaternate Idea section.)

The naive approach here would be to use a loop to just work down the difference between the dividend (A) and the divisor (B) through subtraction, but that's obviously not a very efficient solution.
Instead, we can use bit manipulation to simulate multiplication/division. Since a bitwise shift to the left is the equivalent of a multiplication by 2, if we count how many times we can bitwise shift B 
to the left while still staying under A, then we can quickly work out a chunk of the solution. All that's left is to start over with the remaining amount of A and repeat this process, adding the results to our answer (ans) as we go.
Of course, negative numbers will play havoc with our bitwise shifting, so we should first extract the sign difference and then use only positive numbers for A and B.
There's also the stated edge case, which only occurs at one permutation of A and B, so we can handle that at the outset.

Alternate Idea:
For those who consider bitwise shifts to be too close to multiplication/division, we can instead use the rules of logarithms to our advantage:
Since we'll have to use the absolute values of A and B, we'll have to define the same edge cases as in the earlier solutions. 
Finally, we'll also have to apply a floor() to the result to truncate the decimal before we return ans.

*/
//Javascript Code w/ Bit Manipulation:
var bitDivide = function(A, B) {
    if (A === -2147483648 && B === -1) return 2147483647
    let ans = 0, sign = 1
    if (A < 0) A = -A, sign = -sign
    if (B < 0) B = -B, sign = -sign
    if (A === B) return sign
    for (let i = 0, val = B; A >= B; i = 0, val = B) {
        while (val > 0 && val <= A) val = B << ++i
        A -= B << i - 1, ans += 1 << i - 1
    }
    return sign < 0 ? -ans : ans
};
//Javascript Code w/ Logarithms:
var logDivide = function(A, B) {
    let ans = 0
    if (B === -2147483648) return A === B
    if (A === -2147483648)
        if (B === 1) return -2147483648
        else if (B === -1) return 2147483647
        else A += Math.abs(B), ans++
    ans += Math.floor(Math.exp(Math.log(Math.abs(A)) - Math.log(Math.abs(B))))
    return A > 0 === B > 0 ? ans : -ans
};
