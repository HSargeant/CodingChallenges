const howManyBoats= (arr,limit)=>{
    arr.sort((a,b)=>a-b)
    let l=0
    let r=arr.length-1
    let boats=0
    while(l<r){
        if(arr[l]+arr[r]>limit){
            boats++
            r--
        }else{
            boats++
            l++
            r--
        }
    }
}

// https://leetcode.com/problems/boats-to-save-people/description/
// You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

// Return the minimum number of boats to carry every given person.

 

// Example 1:

// Input: people = [1,2], limit = 3
// Output: 1
// Explanation: 1 boat (1, 2)
// Example 2:

// Input: people = [3,2,2,1], limit = 3
// Output: 3
// Explanation: 3 boats (1, 2), (2) and (3)
// Example 3:

// Input: people = [3,5,3,4], limit = 5
// Output: 4
// Explanation: 4 boats (3), (3), (4), (5)