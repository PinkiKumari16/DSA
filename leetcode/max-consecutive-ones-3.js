function maxOncs(nums, k){
    let start = 0; 
    let end = 0; 
    let maxLen = 0;
    let zero_count=0;
    if(k===0){
        while(end<nums.length){
            if(nums[e]===0){
                maxLen = Math.max(maxLen, end-start);
                start=e+1;
            }
            end++;
        }
        maxLen = Math.max(maxLen, end-start);
        return maxLen;
    }
    else{
        while(end<nums.length){
            if(nums[end]===0){
                zero_count++;
            }
            if(zero_count===k){
                maxLen = Math.max(maxLen, end-start+1);
            }
            while(start<end && zero_count>k){
                if(nums[start]===0){
                    zero_count--;
                }
                start++;
            }
            end++;
        }
        maxLen = Math.max(maxLen, end-start);
        return maxLen;
    }
}


let nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2;
console.log(maxOncs(nums, k));
