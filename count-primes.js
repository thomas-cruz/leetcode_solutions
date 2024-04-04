/*
Given an integer n, return the number of prime numbers that are strictly less than n.

 

Example 1:

Input: n = 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

Example 2:

Input: n = 0
Output: 0

Example 3:

Input: n = 1
Output: 0

 

Constraints:

    0 <= n <= 5 * 106

Intuition

The code efficiently counts prime numbers less than n using the Sieve of Eratosthenes. It initializes an array, marks multiples of primes, and counts remaining primes. Skipping evens and optimizing the sieve contribute to its efficiency.
Approach

Initialization:
Initialize a boolean array isPrime of size n.
Set all odd numbers greater than or equal to 3 to true, skipping even numbers (except 2)

Sieve of Eratosthenes:
Iterate through odd numbers from 3 to the square root of n.
For each prime i, mark multiples of i as false in the array

Count Primes:
Count the number of true values in the array, representing prime numbers less than n.

Optimizations:
Skip even numbers (except 2) in the initialization and sieve steps.
Limit sieve iterations to the square root of n.
Complexity

    Time complexity:
    The Sieve of Eratosthenes has a time complexity of approximately O(n log log n), where n is the input size.

    Space complexity:
    O(n) - The algorithm uses an array of size n to store whether each number is prime.

*/
var countPrimes = function(n) {
    let seen = new Uint8Array(n), ans = 0
    for (let num = 2; num < n; num++) {
        if (seen[num]) continue
        ans++
        for (let mult = num * num; mult < n; mult += num)
            seen[mult] = 1
    }
    return ans
};
