/*
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

 

Constraints:

    1 <= nums.length <= 105
    -231 <= nums[i] <= 231 - 1
    0 <= k <= 105
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  k = k % nums.length;
  let l = 0;
  let r = nums.length - 1;
  // reverse full given array
  // from [1,2,3,4,5,6,7] to [7,6,5,4,3,2,1]
  nums = reverseArr(nums, l, r);

  // reverse part from 0 to k - 1;
  // from [7,6,5,4,3,2,1] to [5,6,7,4,3,2,1]
  l = 0;
  r = k - 1;
  nums = reverseArr(nums, l, r);

  // reverse part from k to the end;
  // from [5,6,7,4,3,2,1] to [5,6,7,1,2,3,4]
  l = k;
  r = nums.length - 1;
  nums = reverseArr(nums, l, r);
};

function reverseArr(nums, l, r) {
    while(l < r) {
    let temp = nums[l];
    nums[l] = nums[r];
    nums[r] = temp;
    l++;
    r--;
  }

  return nums;
}
