let input = require('readline-sync');
let n=+ input.question('n: ');
let m=+ input.question('m: ');
let arr=input.question('arr: ').split(' ').map(Number);
function distributeChoco(arr, n,m){
    arr.sort((a,b)=>a-b);
    let minVal =arr[0+m-1]-arr[0];
    for(let i=0; i<n-m+1; i++){
        minVal=Math.min((arr[i+m-1]-arr[i]), minVal);
    }

    console.log(minVal)
}
distributeChoco(arr, n,m)