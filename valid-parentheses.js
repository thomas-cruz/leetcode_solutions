/*****
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.

Constraints:

    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*****/
/**** Solution
n: length of string
str: input string

    Declare and initialize a stack S.
    Run a loop on i from 0 to n.
        If str[i] is an opening bracket, then push str[i] in the stack.
        If str[i] is a closing bracket, then there are two possibilities:
            If the top bracket present in the stack is the opening bracket of the same type, then pop top element of the stack.
            Else, return false.
    Return S.empty().
****/

var isValid = function(s) {
    let stack = [];
    for(let i = 0; i < s.length; i++){
        let c = s.charAt(i);
        if(c == '(' || c == '{' || c == '['){
            stack.push(c);
        }else{
            if(stack.length == 0){
                return false;
            }
            switch(c){
                case ')': 
                    if(stack[stack.length-1] == '('){
                        stack.pop();
                    }else{
                        return false;
                    }
                    break;
                case '}':
                     if(stack[stack.length-1] == '{'){
                        stack.pop();
                    }else{
                        return false;
                    }
                    break;
                case ']':
                     if(stack[stack.length-1] == '['){
                        stack.pop();
                    }else{
                        return false;
                    }
                    break;
            }
        }
    }
    if(stack.length == 0){
        return true;
    }else{
        return false;
    }
};
