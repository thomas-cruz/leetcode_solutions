/**** Problem
Given a string s, find the length of the longest substring without repeating characters.
Example:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.
Constraints:
  0 <= s.length <= 5 * 104
  s consists of English letters, digits, symbols and spaces.
****/
/**** Solution
1 Have two pointers which will define the starting index start and ending index end of the current window. Both will be 0 at the beginning.
2 Declare a Set that will store all the unique characters that we have encountered.
3 Declare a variable maxLength that will keep track of the length of the longest valid substring.
4 Scan the string from left to right one character at a time.
5 If the character has not encountered before i.e., not present in the Set the we will add it and increment the end index. The maxLength will be the maximum of Set.size() and existing maxLength.
6 If the character has encounter before, i.e., present in the Set, we will increment the start and we will remove the character at start index of the string.
7 Steps #5 and #6 are moving the window.
8 After the loop terminates, return maxLength.
****/
/**
 * @param {string} s
 * @return {number}
*/
var lengthOfLongestSubstring = function(s) {
    // Starting index of the window
    let start = 0;
    // Ending index of the window
    let end = 0;
    // Maximum length of the substring
    let maxLength = 0;
    // Set to store the unique characters
    const uniqueCharacters = new Set();
    // Loop for each character in the string
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {
            uniqueCharacters.add(s[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    return maxLength;
};
