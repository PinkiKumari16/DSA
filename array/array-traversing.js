const arr = [2,3,765,4,3,2];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

let input = require('readline-sync')
let ele = Number(input.question('element: '));
if(ele>=0 && ele<arr.length && typeof(ele)==='number'){
    console.log(arr[ele]);
}
else{
    console.log('enter the valid input...')
}