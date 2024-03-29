var rotateString = function(s, goal) {    
    // for(i=1; i<=s.length; i++){
    //     s=s.slice(-1)+s.slice(0,-1)
    //     if(s==goal) return true 
    // }
    // return false
    // or

    return s.length==goal.length? (s+s).indexOf(goal)>=0 : false
};

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// For example, if s = "abcde", then it will be "bcdea" after one shift.
 

// Example 1:

// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:

// Input: s = "abcde", goal = "abced"
// Output: false