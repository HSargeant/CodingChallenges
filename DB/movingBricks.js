// Today's Byte

// You are transporting bricks on a construction site and want to work as efficiently as possible. The weight of each brick is given by bricks[i]. Given a wheelbarrow that can carry up to (not including) 5000 pounds, return then maximum number of bricks you can place in your wheelbarrow to transport.

// Ex: Given the following bricks…

// bricks = [1000, 1000, 1000, 2000], return 3.

// Ex: Given the following bricks…

// bricks = [1000, 200, 150, 200], return 4.
// Thanks,

const movingBricks=(a,limit=5000)=>{
    a.sort((a,b)=>a-b)
    let curr = 0
    let count=0
    let i=0
    while(curr+a[i]<limit && i<a.length){
        curr+=a[i]
        count++
        i++
    }
    return count
}