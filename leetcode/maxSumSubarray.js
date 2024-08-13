function maxSumSubarray(arr, k){
    let wi_max=0;
    let max_sum=0;

    for(let i=0; i<k; i++){
        wi_max+=arr[i];
    }
    max_sum=wi_max;
    for(let i=k; i<arr.length; i++){
        wi_max+=(arr[i]-arr[i-k]);
        max_sum=Math.max(wi_max, max_sum);
    }
    console.log(max_sum);
}
let arr=[2, 1, 5, 1, 3, 2];
let k = 3;
maxSumSubarray(arr, k)