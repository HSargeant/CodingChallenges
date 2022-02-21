// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100


function validParentheses(parens) {
  let result = 0;
  for (i = 0; i < parens.length; i++) {
    
    if(parens[i]=="("){
      result+=1
    }else result-=1  
    
     if(result <0 ) return false
  }
 
  return result == 0
}