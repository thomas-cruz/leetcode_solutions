/**** Problem
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
A subarray is a contiguous part of an array.
Example:
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: [4,-1,2,1] has the largest sum = 6.
  
Constraints:
    1 <= nums.length <= 105
    -104 <= nums[i] <= 104
****/
/**** Solution
    Create a variable to store global maximum. Initialise to first element in nums.
    Create a variable to store current sum. Initialise with zero.
    Run a loop from left to right over the array. If current sum has become negative then update it with value 0.
    Add the current element to current sum and update the global maximum if current sum is greater than global maximum.
    Return the global maximum.
****/
/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function(nums) {
    let max_sum = nums[0];
    let curr=0;
    for(let i = 0; i < nums.length; i++){
        if(curr<0){ //if negative just set to zero
            curr=0;
        }
        curr += nums[i];
        max_sum =  Math.max(max_sum , curr); //compare which is bigger, previous sum or current sum
    }
    return max_sum;
};
