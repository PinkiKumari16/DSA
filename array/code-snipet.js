// let b = [1,2,3,4,5,6,7,8,9,10];
// for(let i=0; i<10; i++){
//     setTimeout(()=>console.log(b[i]),1000);
// }
// for(var i=0; i<10; i++){
//     setTimeout(()=>console.log(b[i]),1000);
// }


// let obj = { id: "1", name: "user22", age: "26", work: "programmer" };
// // method-1 keys array;
// let keysOfObj = Object.keys(obj);
// console.log(keysOfObj);

// // method-2 values array
// let valuesArray = Object.values(obj);
// console.log(valuesArray);

// // methods-3 key value pair
// let keyValuePair = Object.entries(obj);
// console.log(keyValuePair);


// write the code to finds the vowel
// let findVowel = (str) =>{
//     let v=['a','e','i','o','u'];
//     let c=0;
//     for(let i of str.toLowerCase()){
//         if(v.includes(i)){
//             c++;
//         }
//     }
//     return c;
// }
// console.log(findVowel('Pinki Kumari'))


// let stringSame = (firstWord, secondWord) => {
//     let a = firstWord.toLowerCase().split("").sort().join('');
//     let b = secondWord.toLowerCase().split("").sort().join('');
//     return a===b;
// }
// console.log(stringSame('pinki','inkpi'));



// 59. Implement a function that returns an updated array with r right
// rotations on an array of integers a .
// Example:
// Given the following array: [2,3,4,5,7]
// Perform 3 right rotations:
// First rotation : [7,2,3,4,5] , Second rotation : [5,7,2,3,4] and, Third rotation: [4,5,7,2,3]
// return [4,5,7,2,3]

// let arr = [2,3,4,5,7];
// let k=3;
// for(let i =0; i<k; i++){
//     arr.unshift(arr.pop());
// }
// console.log(arr);

// // Code 1:
// let x= {}, y = {name:"Ronny"},z = {name:"John"};
// console.log(x)
// x[y] = {name:"Vivek"};
// console.log(x)
// x[z] = {name:"Akki"};
// console.log(x)
// console.log(x[y]);

// // code2
// console.log('1'+1)
// console.log(1-'L')
// console.log(2+'-2'+2)
// console.log('Hello'-'World'+78)
// console.log('Hello'+78)

// // Code 3:
// let a = 0;
// let b = false;
// console.log((a == b));
// console.log((a === b));

// x=23;
// let x;  



// function sum(){
//     let a=8;
//     let b=2;
//     let c=a+b;
// }
// console.log(a,b,c);
// sum()
// console.log()


// let arr=[1,2,3,4,5];
// console.log(arr[2], arr.length);
// arr.length = 0;
// console.log(arr)
// console.log(arr[2], arr.length)


// for(var i=0; i<3; i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000+i);
// }

// for(let i=0; i<5; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },0)
// }

// let count = 0;
// (function immediate(){
//     if(count==0){
//         let count = 2;
//         console.log(count);
//     }
//     console.log(count);
// })();


// console.log(1+false);
// console.log(1+true);
// console.log(1-false);
// console.log(1+'2'-1)

// (function fnA(a){
//     return (function fnB(b){
//         console.log(a);
//     })(1);
// })(0);

// console.log('A'.charCodeAt());
// console.log(String.fromCharCode(97));
// console.log(String.fromCodePoint(98))


// console.log(3-'2');
// console.log('2'-3);
// console.log(-4+'2'+5-'4')

// for(var i=0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }


// let obj={a:1, b:2};
// let ref = obj;
// obj=null;  // if you change in the original values then the copy object will not change.
// ref.add=0;  // if you change in the copy object then original object also change.
// console.log(ref)
// console.log(obj)

// (function(){
//     var a = {};
//     var b = a;
// })()
// console.log(a)


// function foo(a,b){
//     console.log(arguments[0]);
//     console.log(arguments[1]);
// }
// foo(1,2)


// function add(a,b){
//     console.log(a,b)
//     return a+b;
// }
// console.log(add.call(NaN,2,9))


// function add(a,b){
//     console.log(a,b)
//     return a+b;
// }
// console.log(add(null,2,9))


let arr = [1,2,3,4,9];
for(let i=0; i<arr.length; i++){
    console.log(arr+i);
}