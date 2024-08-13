function smallestSubArray(arr, x){
    let startWin=0;
    let endWin=0;
    let sum1=0;
    let minLen=Math.max(... arr);
    let len;
    while(endWin<arr.length){
        sum1+=arr[endWin];
        if(sum1>x){
            len=endWin-startWin+1;
            minLen=Math.min(len, minLen);
            while(startWin<endWin && sum1>x){
                sum1-=arr[startWin];
                len=endWin-startWin+1;
                minLen=Math.min(len, minLen);
                startWin++;
            }
        }
        endWin++;

    }
    console.log(minLen);
    return minLen;
}

let arr=[1,4,45,6,0,19];
let x=51;
smallestSubArray(arr, x);
Infinity