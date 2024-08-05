const input = require('readline-sync');
const arr = [10,2,3,4,5,6,7];

let userVal = Number(input.question('items: '));
let flag=false;
let ind = undefined;
for(let i in arr){
    if(arr[i]===userVal){
        flag=true;
        ind=i;
        break
    }
}
console.log(flag, ind);