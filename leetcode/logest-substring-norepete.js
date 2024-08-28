function getSubString(s){
    let d=new Map();
    let left=0;
    let maxLen = 0;
    for(let right=0; right<s.length; right++){
        if(d.has(s[right])){
            left = Math.max(left, d.get(s[right])+1)
        }
        d.set(s[right], right);
        maxLen=Math.max(maxLen, right-left+1);
    }
    console.log(maxLen);
}
let s="abcabcbb";
getSubString(s);


let l=[1,2,3,4,5];
for(var i=0; i<l.length; i++){
    setTimeout(()=>console.log(l[i]), 1000)
}