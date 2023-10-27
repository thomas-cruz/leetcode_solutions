/* Marjority element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

*/

/*Boyer-Moore majority vote algorithm
Intuition:

The intuition behind the Moore's Voting Algorithm is based on the fact that if there is a majority element in an array, it will always remain in the lead, even after encountering other elements.
Explanation:

Algorithm:

    Initialize two variables: count and candidate. Set count to 0 and candidate to an arbitrary value.
    Iterate through the array nums:
    a. If count is 0, assign the current element as the new candidate and increment count by 1.
    b. If the current element is the same as the candidate, increment count by 1.
    c. If the current element is different from the candidate, decrement count by 1.
    After the iteration, the candidate variable will hold the majority element.

Explanation:

    The algorithm starts by assuming the first element as the majority candidate and sets the count to 1.
    As it iterates through the array, it compares each element with the candidate:
    a. If the current element matches the candidate, it suggests that it reinforces the majority element because it appears again. Therefore, the count is incremented by 1.
    b. If the current element is different from the candidate, it suggests that there might be an equal number of occurrences of the majority element and other elements. Therefore, the count is decremented by 1.
        Note that decrementing the count doesn't change the fact that the majority element occurs more than n/2 times.
    If the count becomes 0, it means that the current candidate is no longer a potential majority element. In this case, a new candidate is chosen from the remaining elements.
    The algorithm continues this process until it has traversed the entire array.
    The final value of the candidate variable will hold the majority element.

Explanation of Correctness:
The algorithm works on the basis of the assumption that the majority element occurs more than n/2 times in the array. This assumption guarantees that even if the count is reset to 0 by other elements, the majority element will eventually regain the lead.

Let's consider two cases:

    If the majority element has more than n/2 occurrences:
        The algorithm will ensure that the count remains positive for the majority element throughout the traversal, guaranteeing that it will be selected as the final candidate.

    If the majority element has exactly n/2 occurrences:
        In this case, there will be an equal number of occurrences for the majority element and the remaining elements combined.
        However, the majority element will still be selected as the final candidate because it will always have a lead over any other element.

In both cases, the algorithm will correctly identify the majority element.

The time complexity of the Moore's Voting Algorithm is O(n) since it traverses the array once.

This approach is efficient compared to sorting as it requires only a single pass through the array and does not change the original order of the elements.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        //assume the first element is the answer

        // if the current best ans is no longer the majority
        // i.e. it's count is not larger than i / 2
        if (count === 0) {
            candidate = num; 
        }
        //if meet different value,count--
        //if meet the same value, count++ 
        count += (num === candidate) ? 1 : -1
    }
    
    return candidate;
};
