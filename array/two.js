const input = require('readline-sync');
let t = Number(input.question('t: '));
while(t){
    let n = Number(input.question('n: '));
    let str1 = input.question('String: ');
    let res = str1.split('').sort().join('');
    let count = 0;
    while(str1 !== res){
        let reverse1 = str1.split('').reverse().join('');
        let subString = str1.slice(str1.indexOf('1'),n-reverse1.indexOf('0'));
        let revSubString = subString.split('').reverse().join('');
        str1 = str1.replace(subString,revSubString);
        count+=1;
    }
    console.log(count);

    t--;
}