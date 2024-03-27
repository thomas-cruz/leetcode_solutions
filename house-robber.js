/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

 

Constraints:

    1 <= nums.length <= 100
    0 <= nums[i] <= 400

*/
/*
Intuition

The problem can be modeled as a dynamic programming challenge where the goal is to find the maximum amount of money that can be robbed from a row of houses. The key insight is to recognize that at each house, the decision to rob or skip depends on the maximum amount robbed from the previous house.
Approach

We approach this problem using dynamic programming. We maintain two arrays, dpRobbed and dpSkipped, to keep track of the maximum amount of money when the current house is robbed or skipped. For each house, we calculate the maximum amount when it is robbed (dpRobbed) as the sum of the amount in the current house and the maximum amount when the previous house was skipped. Similarly, we calculate the maximum amount when the current house is skipped (dpSkipped) as the maximum of the two scenarios: either the previous house was robbed, or it was skipped.

By iterating through the houses, we build up these dynamic programming arrays, and at the end, the answer is the maximum amount considering the last house, which can either be robbed or skipped.
Complexity

    Time complexity: O(n)
        We iterate through the array of houses once, performing constant-time operations at each step.
    Space complexity: O(n)
        We use two arrays of length n (dpRobbed and dpSkipped) to store the maximum amount of money at each house. The space complexity is linear with respect to the number of houses.
*/
/**
 * @param {number[]} nums - Array representing the amount of money in each house
 * @return {number} - Maximum amount of money that can be robbed
 */
var rob = function(nums) {
    const n = nums.length;

    // Edge case: If there are no houses, return 0
    if (n === 0) {
        return 0;
    }

    // Initialize two arrays to store the maximum amount of money
    // for scenarios where the current house is robbed or skipped
    const dpRobbed = [nums[0]]; // Maximum amount when the current house is robbed
    const dpSkipped = [0];      // Maximum amount when the current house is skipped

    // Iterate through the houses starting from the second one
    for (let i = 1; i < n; i++) {
        // Calculate the maximum amount when the current house is robbed
        dpRobbed[i] = dpSkipped[i - 1] + nums[i];

        // Calculate the maximum amount when the current house is skipped
        dpSkipped[i] = Math.max(dpRobbed[i - 1], dpSkipped[i - 1]);
    }

    // Return the maximum amount considering the last house
    return Math.max(dpRobbed[n - 1], dpSkipped[n - 1]);
};

// Example usage:
const nums = [2, 7, 9, 3, 1];
const result = rob(nums);
console.log(result);
