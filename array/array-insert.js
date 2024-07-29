const arr = [2,3,5,7,4,2];
const input = require('readline-sync');
const [ele, pos] = input.question('enter the value and index: ').split(' ').map(Number);
for(let i=arr.length-1; i>=pos; i--){
    arr[i+1] = arr[i];
    if(i==pos){
        arr[i] = ele
    }
}
console.log(arr);