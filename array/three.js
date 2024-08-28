const input = require('readline-sync');

const minimumTimeTransfer = (s,n) =>{
    let opration = 0;
    let i = 0;
    while(i<=n-1){
        if(s[i] == s[i+1]){
            opration+=1;
            i+=2;
        }else{
            if(i === n-2){
                opration+=2;
                i+=2;
            }else{
                opration+=1
                i+=1;
            }
        }
    }
    return opration;
    
}


let t = Number(input.question('t: '));
while(t){
    let n = Number(input.question('n: '));
    let s = input.question('string: ');

    let transferCount = minimumTimeTransfer(s,n);
    console.log(transferCount);
    
    t--;
}




