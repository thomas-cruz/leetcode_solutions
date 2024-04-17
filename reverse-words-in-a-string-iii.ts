/*
Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"

Constraints:

    1 <= s.length <= 5 * 104
    s contains printable ASCII characters.
    s does not contain any leading or trailing spaces.
    There is at least one word in s.
    All the words in s are separated by a single space.

    Time complexity: O(N)

    Space complexity: O(1)

*/
function reverseWords(s: string): string {
  // use two pointers
  // spaces means words end there
  // l: point to beginning letter of the word
  // r: traverse each till it find the end letter of word
  // based on space
  let l = 0
  let r = 0
  let resstr = ''
  
  while(l < s.length){
  let str = ''
      // traverse till space in not encountered
      while(r<s.length && s[r] !== " "){
        str += s[r]
        r++
      }
  
      // if space found 
      // then get the l and r indexes and reverse it
      const val = str.split('').reverse().join('')
      resstr += val+" "
  
      l = r+1
      r=l
  }
  
  return resstr.trim()
};
