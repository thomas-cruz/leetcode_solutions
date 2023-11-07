/*
Factorial Trailing Zeroes
Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.

 

Example 1:

Input: n = 3
Output: 0
Explanation: 3! = 6, no trailing zero.

Example 2:

Input: n = 5
Output: 1
Explanation: 5! = 120, one trailing zero.

Example 3:

Input: n = 0
Output: 0

 

Constraints:

    0 <= n <= 104


*/
/*
The idea is:

    The ZERO comes from 10.
    The 10 comes from 2 x 5
    And we need to account for all the products of 5 and 2. likes 4×5 = 20 ...
    So, if we take all the numbers with 5 as a factor, we'll have way more than enough even numbers to pair with them to get factors of 10

Example One

How many multiples of 5 are between 1 and 23? There is 5, 10, 15, and 20, for four multiples of 5. Paired with 2's from the even factors, this makes for four factors of 10, so: 23! has 4 zeros.

Example Two

How many multiples of 5 are there in the numbers from 1 to 100?

because 100 ÷ 5 = 20, so, there are twenty multiples of 5 between 1 and 100.

but wait, actually 25 is 5×5, so each multiple of 25 has an extra factor of 5, e.g. 25 × 4 = 100，which introduces extra of zero.

So, we need know how many multiples of 25 are between 1 and 100? Since 100 ÷ 25 = 4, there are four multiples of 25 between 1 and 100.

Finally, we get 20 + 4 = 24 trailing zeroes in 100!

The above example tell us, we need care about 5, 5×5, 5×5×5, 5×5×5×5 ....

Example Three

By given number 4617.

5^1 : 4617 ÷ 5 = 923.4, so we get 923 factors of 5

5^2 : 4617 ÷ 25 = 184.68, so we get 184 additional factors of 5

5^3 : 4617 ÷ 125 = 36.936, so we get 36 additional factors of 5

5^4 : 4617 ÷ 625 = 7.3872, so we get 7 additional factors of 5

5^5 : 4617 ÷ 3125 = 1.47744, so we get 1 more factor of 5

5^6 : 4617 ÷ 15625 = 0.295488, which is less than 1, so stop here.

Then 4617! has 923 + 184 + 36 + 7 + 1 = 1151 trailing zeroes.
*/
/*
The Idea

    The # of trailing 0 eqauls to how many 5s we see if we break up the factorial
    For example 5! = 1* 2 * 3 * (2 * 2) * 5 , we found one 5, so there is 1 zero.
    Why 5? because only a pair of 2 * 5 can create 0, and since there are way more 2s than 5s, it's more efficient to count 5s
    Why recursion? To break up big numbers that were created by different 5s, such as 25 = 5 * 5.

*/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
if (n<5) return 0;
    return Math.floor(n/5) + trailingZeroes(n/5);
};
