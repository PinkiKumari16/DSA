// function addNumaricStrings(s1,s2){
//     return (String(Number(s1)+Number(s2)));
// }
// let s1='123';
// let s2='456';
// console.log(addNumaricStrings(s1,s2));




function addNumaricStrings(s1,s2){
    let j=s1.length-1;
    let i= s2.length-1;
    let carry=0;
    let res=''
    while(i>=0 || j>=0 || carry>0){
        let d1=Number(s1[i]);
        let d2 = parseInt(s2[j]);
        let sum = d1+d2+carry;
        res=sum%10+res;
        carry=Math.floor(sum/10)
        j--;
        i--;
    }
    return res;
}
let s1='123';
let s2='456';
console.log(addNumaricStrings(s1,s2));