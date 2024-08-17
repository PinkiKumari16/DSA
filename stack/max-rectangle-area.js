function maxRactangleArea(arr){
    let stack = new Array();
    let index = -1;
    let maxArea = 0;
    for(let i=0; i<=arr.length; i++){
        let element = (i===arr.length)? 0:arr[i];
        while(index!==-1 && element<arr[stack[index]]){
            let h=arr[stack[index--]];
            let preInd = (index===-1)? -1: stack[index];
            let w=i-preInd-1;
            maxArea = Math.max(maxArea, h*w);
        }
        stack[++index]=i;
    }
    return maxArea;
}
let arr = [2,1,5,6,2,3];
console.log(maxRactangleArea(arr));