const input = require('readline-sync');
const arr = [2,3,5,6,3,2,1];

// let pos = Number(input.question('delete position: '));
// for(let i=pos; i<arr.length; i++){
//     arr[i] = arr[i+1]
//     if(i===arr.length-1){
//         arr.pop()
//     }
// }
// console.log(arr);

const ele = Number(input.question('delete element: '));
let flag = false;
for(let i=0; i<arr.length; i++){
    if(arr[i]===ele){
        flag = true;
    }
    if(flag===true){
        arr[i]=arr[i+1]
    }
    if(i===arr.length-1){
        arr.pop()
    }
}
console.log(arr);