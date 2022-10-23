

class MedianFinder {
    constructor(){
        this.nums=[]
    }
    
    findMedian(){
        let mid = Math.floor(this.nums.length/2)
        if(this.nums.length%2==0) {
            return (this.nums[mid]+this.nums[mid-1])/2
        }else {
            return this.nums[mid]
        }
    }
    
    addNum(num){
        
       if(this.nums.length==0) {this.nums.push(num) 
        }else {
            let start = 0;
        let end = this.nums.length;
        while (start < end){
            let mid = Math.floor((start+end)/2);
            if (num > this.nums[mid]) start = mid+1;
            else end = mid;
        }
        this.nums.splice(start,0,num);
        }
    }
    
    
    
};

// 295. Find Median from Data Stream - hard
// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.
 

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0
 

// Constraints:

// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.
 