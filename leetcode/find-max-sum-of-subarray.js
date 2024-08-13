const findMaxSubArray = (arr,k)=>{
    let maxSum=0;
    for(let i=0; i<k; i++){
        maxSum+=arr[i]
    }
    let sumVal=maxSum;
    for(let i=k; i<arr.length; i++){
        sumVal-=arr[i-k]
        sumVal+=arr[i]
        maxSum=Math.max(sumVal, maxSum);
    }
    console.log(maxSum);
}
const arr=[100,200,50,0,200,20,100];
let k=3
findMaxSubArray(arr,k);