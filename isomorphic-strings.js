/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true

Example 2:

Input: s = "foo", t = "bar"
Output: false

Example 3:

Input: s = "paper", t = "title"
Output: true

 

Constraints:

    1 <= s.length <= 5 * 104
    t.length == s.length
    s and t consist of any valid ascii character.

Intuition

To determine if two strings s and t are isomorphic, we need to check if the characters in s can be replaced to obtain t, maintaining the order of characters. If two characters in s map to the same character in t, or if a character in s maps to multiple characters in t, the strings are not isomorphic.
Approach

    Check if the lengths of strings s and t are equal. If not, return False.
    Initialize two dictionaries mapChars and setVals to store mappings from characters in s to characters in t, and vice versa, and to store characters already mapped to in t.
    Iterate through the characters of s and t simultaneously.
    For each pair of characters s_char and t_char, check if:
        s_char already has a mapping in mapChars, and it does not map to t_char.
        t_char already exists in setVals.
    If any of the above conditions are met, return False as the strings are not isomorphic.
    If none of the conditions are met, update the mappings in mapChars and setVals.
    After iterating through all characters, return True as the strings are isomorphic.

Complexity

    Time complexity:The algorithm iterates through the characters of s and t once, so the time complexity is O(n)O(n)O(n), where n is the length of the strings s and t.

    Space complexity: The algorithm uses two dictionaries mapChars and setVals to store mappings and mapped characters, each with a maximum of 26 entries (for lowercase English letters). Thus, the space complexity is O(1)O(1)O(1).
*/
var isIsomorphic = function(s, t) {
    if (s.length !== t.length)
        return false;
    const mapChars = {};
    const setVals = new Set();
    for (let i = 0; i < s.length; i++) {
        if (mapChars.hasOwnProperty(s[i])) {
            if (mapChars[s[i]] !== t[i])
                return false;
        } else {
            if (setVals.has(t[i]))
                return false;
            mapChars[s[i]] = t[i];
            setVals.add(t[i]);
        }
    }
    return true;
};
