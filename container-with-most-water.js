/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

 

Constraints:

    n == height.length
    2 <= n <= 105
    0 <= height[i] <= 104

ntuition

The problem involves finding two lines in a set of vertical lines (represented by an array of heights) that can form a container to hold the maximum amount of water. The water's capacity is determined by the height of the shorter line and the distance between the two lines. We want to find the maximum capacity among all possible combinations of two lines.
Approach

    We use a two-pointer approach, starting with the left pointer at the leftmost edge of the array (left = 0) and the right pointer at the rightmost edge of the array (right = height.size() - 1).

    We initialize a variable maxWater to store the maximum water capacity, initially set to 0.

    We enter a while loop, which continues as long as the left pointer is less than the right pointer. This loop allows us to explore all possible combinations of two lines.

    Inside the loop, we calculate the width of the container by subtracting the positions of the two pointers: width = right - left.

    We calculate the height of the container by finding the minimum height between the two lines at positions height[left] and height[right]: h = min(height[left], height[right]).

    We calculate the water capacity of the current container by multiplying the width and height: water = width * h.

    We update the maxWater variable if the current container holds more water than the previous maximum: maxWater = max(maxWater, water).

    Finally, we adjust the pointers: if the height at the left pointer is smaller than the height at the right pointer (height[left] < height[right]), we move the left pointer to the right (left++); otherwise, we move the right pointer to the left (right--).

    We repeat steps 4-8 until the left pointer is less than the right pointer. Once the pointers meet, we have explored all possible combinations, and the maxWater variable contains the maximum water capacity.

    We return the maxWater value as the final result.

Complexity

    Time complexity:

The time complexity of this algorithm is O(n), where n is the number of elements in the height array. This is because we explore all possible combinations of two lines once, and each operation inside the loop is performed in constant time.

    Space complexity:

The space complexity is O(1), which means the algorithm uses a constant amount of extra space regardless of the input size. We only use a few extra variables (left, right, maxWater, width, h, and water) that do not depend on the input size.
*/
var maxArea = function(height) {
    let left = 0;            // Left pointer starting from the leftmost edge
    let right = height.length - 1; // Right pointer starting from the rightmost edge
    let maxWater = 0;        // Initialize the maximum water capacity
    
    while (left < right) {
        // Calculate the width of the container
        let width = right - left;
        
        // Calculate the height of the container (the minimum height between the two lines)
        let h = Math.min(height[left], height[right]);
        
        // Calculate the water capacity of the current container
        let water = width * h;
        
        // Update the maximum water capacity if the current container holds more water
        maxWater = Math.max(maxWater, water);
        
        // Move the pointers towards each other
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};
