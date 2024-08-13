function removeDublicate2(nums){
    if (nums.length===0) return 0;
    
    let c=1;
    let ind = 1;
    for(let i=1; i<nums.length; i++){
        if(nums[i] === nums[i-1]){
            c++;
        }
        else{
            if(c<=2){
                nums[ind] = nums[i];
                ind++;
            }
        }
    }
    return ind;
}
let nums =[1,1,1,2,2,3];
console.log(removeDublicate2(nums));