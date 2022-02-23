/*****
Given a roman numeral, convert it to an integer.
Constraints:
    1 <= s.length <= 15
    s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
    It is guaranteed that s is a valid roman numeral in the range [1, 3999].
*****/
/**** Solution
Algorithm:
    Create a function getInteger() to return the value of a single roman character passed to it using switch cases
    Initialize result to store required integer
    Again, initialize current and next to store the value of current and next integer values of respective characters in the string for every iteration
    Iterate for i =  0  until i < N  (N = size of the array)
        If i is the last index of the array, we have no next character, so add integer value of String[i] and return result
        Retrieve the integer value of current and next characters using getInteger()
        If current <= next
            Add current to the result
            Increment i by 1, i.e., i++
        Else
            Add next – current to the result
            Increment i by 2, i.e, i += 2
    Print the result
****/
function getInt(c){
    switch(c)
    {
        case 'I' : return 1;
        case 'V' : return 5;
        case 'X' : return 10;
        case 'L' : return 50;
        case 'C' : return 100;
        case 'D' : return 500;
        case 'M' : return 1000;
        default : return -1;
    }
}

var romanToInt = function(s) {
    let curr = 0;
    let next = 0;
    let result = 0;
    let i = 0;
    let n = s.length;
    while(i < n){
        if(i == n -1){
            result += getInt(s.charAt(i));
            return result;
        }
        curr = getInt(s.charAt(i));
        next = getInt(s.charAt(i+1));
        if(curr >= next){
            result += curr;
            i++;
        }else{
            result += next - curr;
            i += 2;
        }   
    }
    return result;
};
