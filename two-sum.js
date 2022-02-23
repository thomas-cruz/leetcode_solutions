/*****
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

 

Constraints:

    2 <= nums.length <= 104
    -109 <= nums[i] <= 109
    -109 <= target <= 109
    Only one valid answer exists.

*****/

/***** Solution
We can check for every pair in the array and if their sum is equal to the given target, print their indices. 
This solution needs to check every possible pair and number of possible pairs in the array = n * (n – 1) / 2. 

Algorithm:
    Run a loop to maintain the first index of the solution in the array
    Run another loop to maintain a second index of the solution for every first integer
    If at any point, the sum of values of two indices is equal to the target
        Print its indices
*****/

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = 0; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                if(i != j){
                    return [i, j];  
                }   
            }    
        }
    }
    return [-1, -1];
};
