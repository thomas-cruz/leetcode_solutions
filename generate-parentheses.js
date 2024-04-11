/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

 

Constraints:

    1 <= n <= 8



 1.   The idea is to add ')' only after valid '('
 2.   We use two integer variables left & right to see how many '(' & ')' are in the current string
 3.   If left < n then we can add '(' to the current string
 4.   If right < left then we can add ')' to the current string

                    (0, 0, '')
		      	|	
		    (1, 0, '(')  
		   /           \
            (2, 0, '((')      (1, 1, '()')
	   	/                 \
          (2, 1, '(()')           (2, 1, '()(')
	   	/                       \
        (2, 2, '(())')                (2, 2, '()()')
            |	                           |
      res.append('(())')            res.append('()()')

*/

var generateParenthesis = function(n) {
    function backtrack(S='', left=0, right=0) {
        if (S.length === 2 * n) {
            result.push(S);
            return;
        }
        if (left < n) {
            backtrack(S + '(', left + 1, right);
        }
        if (right < left) {
            backtrack(S + ')', left, right + 1);
        }
    }

    let result = [];
    backtrack();
    return result;
};
