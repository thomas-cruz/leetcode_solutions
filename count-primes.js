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
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	// create an array for all the numbers from 0 to n and marked them as true
    let isPrime = new Array(n).fill(true);
	// mark 1 as false as it is not prime for sure
    isPrime[1] = false;
	// start looping from 2 as we already mark 1 as Not Prime before
	// if you do not understand why the condition is i*i < n, it's ok, keep looking
    for (let i = 2; i * i < n; i++) {
		// i.e. n = 100, i = 2, j = 4, 6, 8, ...
		// 4, 6, 8, ... will be marked as false and can be skipped
        if (!isPrime[i]) continue;
		// for any number n, its power n^2 is not prime
		// also for n^2 + n, n^2 + 2n, n^2 + 3n... are not primes as well
        for (let j = i * i; j < n; j += i) isPrime[j] = false;
    }
	// to better understand the loop, here is an example:
	// n = 10, i starting from i = 2, i * i = 4 < 10, execute the loop
	// isPrime[2] = true, go to the second loop
	// j = i * i = 4, 4 < 10, execute the loop
	// isPrime[4] = false, j = j + i = 6, 6 < 10, isPrime[6] = false, so as isPrime[8] = false
	// now i = 3, i * i = 9 < 10, keep going
	// isPrime[3] = true, gogogo
	// j = i * i = 9 < 10, isPrime[9] = false, j = j + i = 12 > 10, stop the second for loop
	// then increment i to i = 4, i * i = 16 > 10, for loop ends
	// notice that we did not touch isPrime[5] and isPrime[7] so that both of them remain true
	// after the loops, isPrime = [true, false, true, true, false, true, false, true, false, false]
	// the first one, which is isPrime[0] = true, it doesn't matter because in the later time
	// we start counting from the number 1
    let count = 0;
	// simply counting the number of true in the array
    for (let i = 1; i < n; i++) {
        if (isPrime[i]) count++;
    }
    return count;
};
