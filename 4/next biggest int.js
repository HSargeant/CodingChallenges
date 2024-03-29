function nextBigger(n){
  let digits = (n+"").split("")
  let index = digits.length-1
  for(i=digits.length-1; i>-1; i--){
    if(digits[i]>digits[i-1]){
      index=i-1
      break
    }
  }
  if(index ==digits.length-1) return -1
  
  let swapIndex
  let left = digits.slice(0,index+1)
  let right = digits.slice(index+1,digits.length)

  for(i=right.length-1;i>-1; i--){
    if(left[left.length-1]<right[i]){
      let temp = left[left.length-1]
      left[left.length-1]=right[i]
      right[i]=temp
      break
    }
  }
  
  right.sort((a,b)=>a-b)
  let res=+left.concat(right).join("")

  return res

}

// DESCRIPTION:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil