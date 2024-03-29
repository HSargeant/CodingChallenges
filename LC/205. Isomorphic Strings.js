var isIsomorphic = function(s, t) {
    if(!t||!s) return false
    if(s.length!=t.length) return false
    const smap = new Map();
  const tmap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if ((!smap.has(charS) && !tmap.has(charT))) {
      smap.set(charS, charT);
      tmap.set(charT, charS);
    } else if (smap.get(charS) !== charT || tmap.get(charT) !== charS) {
      return false;
    }
  }
  

  return true;
    
};


// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.
