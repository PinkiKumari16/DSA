var majorityElement = function(nums) {
    let d={};
    for(let i=0; i<nums.length; i++){
        if(!(d.hasOwnProperty(nums[i]))){
            d[nums[i]]=0
        }
        d[nums[i]]+=1;
        
    }
    let val = Object.values(d);
    let ind = val.indexOf(Math.max(... val));
    return Object.keys(d)[ind]

};
let nums =[2,2,1,1,1,2,2];
console.log(majorityElement(nums));
