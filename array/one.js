const input = require('readline-sync');
let t = Number(input.question('t: '));
for(let i=0; i<t; i++){
    let [l,r] = input.question('l,r: ').split(' ').map(Number);
    let sum1 = 0;
    while(l<=r){
        let rev = String(l).split('').reverse().join('');
        if(rev == l){
            sum1+=l;
        }
        l+=1
    }
    console.log(sum1);
}