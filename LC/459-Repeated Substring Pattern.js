// Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.

// Example 1:

// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:

// Input: s = "aba"
// Output: false
// Example 3:

// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 
// Constraints:

// 1 <= s.length <= 104
// s consists of lowercase English letters.

function repeatedSubstringPattern(s){
    if(s.length<=1) return false
    let check=""
    for(i=0; i<s.length/2; i++){
        check+=s[i]
        if(s.split(check).join("")=="") return true
    }
    return false
};