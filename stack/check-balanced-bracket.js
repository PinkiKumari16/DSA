// class Stack{
//     constructor(){
//         this.stack = [];
//     }
//     push(element){
//         this.stack.push(element);
//     }
//     pop(){
//         if (this.stack.length === 0) return 'empty';
//         else{
//             return this.stack.pop()
//         } 
//     }
// }


// let checkBalanceBracket = (arr) => {
//     let stack = new Stack();
//     for(let i of arr){
//         if(i==='(' || i==='[' || i==='{'){
//             stack.push(i);
//         }
//         else{
//             if(stack.length === 0) return false;
//             let check;
//             switch(i){
//                 case ')':
//                     check = stack.pop()
//                     if(check==='{' || check==='[') {
//                         return false
//                     }
//                     break
//                 case ']':
//                     check = stack.pop();
//                     if(check==='(' || check==='{') {
//                         return false
//                     }
//                     break
//                 case '}':
//                     check = stack.pop();
//                     if(check==='(' || check==='[') {
//                         return false
//                     }
//                     break
//             }

//         }
//     }
//     return stack.stack.length==0;

// }

// let arr = "([{])";
// if(checkBalanceBracket(arr)){
//     console.log('Balanced')
// }
// else{
//     console.log('Not Balanced')
// }

let