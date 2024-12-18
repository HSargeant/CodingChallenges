function maxChunksToSorted(arr) {
    let max = 0;
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) res++;
    }
    return res;
};
// 769. Max Chunks To Make Sorted