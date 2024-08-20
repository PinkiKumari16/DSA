function findMaxConsecutiveOnes(nums){
    let lastZeroInd=-1;
    let start=0;
    let end=0;
    let maxCount = 0;
    for(; end<nums.length; end++){
        if(nums[end]===0){
            start = lastZeroInd+1;
            lastZeroInd = end;
            maxCount = Math.max(maxCount, end-start+1);
        }
    }
    maxCount = Math.max(maxCount, end-start);
    return maxCount;
}
let num = [1,0,1,0,1];
console.log(findMaxConsecutiveOnes(num));


// Example 1:
// 	Input:  nums = [1,0,1,1,0]
// 	Output:  4
	
// 	Explanation:
// 	Flip the first zero will get the the maximum number of consecutive 1s.
// 	After flipping, the maximum number of consecutive 1s is 4.

// Example 2:
// 	Input: nums = [1,0,1,0,1]
// 	Output:  3
	
// 	Explanation:
// 	Flip each zero will get the the maximum number of consecutive 1s.
// 	After flipping, the maximum number of consecutive 1s is 3.
	