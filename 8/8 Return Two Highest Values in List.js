// DESCRIPTION:
// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []
function twoHighest(arr) {
  arr.sort((a,b)=>b-a)
let set1 = [...new Set(arr)]
  let result =[]
  for(i of set1){
    result.push(i)
    if(result.length==2) return result
  }
  return result                
}