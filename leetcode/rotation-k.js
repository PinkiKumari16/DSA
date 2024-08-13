var rotate = function(nums, k) {
    let n = nums.length;
    let res = new Array();
    console.log(res)
    for(let i=0; i<n; i++){
        res[(i+k)%n]=nums[i];
    }
    console.log(res)
    for(let i=0; i<n; i++){
        nums[i]=res[i];
    }
    return nums;
};
let nums = [1,2,3,4,5,6,7];
let k = 3;
rotate(nums, k);