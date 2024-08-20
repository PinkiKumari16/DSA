function findNthUglyNumber(n){
    if(n===1){
        return 1;
    }
    let arr=[1]
    let point2=0;
    let point3=0;
    let point5=0;
    while(arr.length<n){
        let valueArr = [arr[point2]*2, arr[point3]*3, arr[point5]*5];
        let minVal = Math.min(... valueArr);
        if(!arr.includes(minVal)){
            arr.push(minVal);
        }
        if(minVal===valueArr[0]){
            point2++;
        }
        else if(minVal===valueArr[1]){
            point3++;
        }
        else{
            point5++;
        }
    }
    return (arr[n-1])
}
let n=1;
console.log(findNthUglyNumber(n));