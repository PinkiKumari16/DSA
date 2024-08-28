function findAnnagram(s,pat){
    let res=0;
    let statWin=0;
    let patArr = new Array(26).fill(0);
    let allArr = new Array(26).fill(0);

    while(statWin<pat.length){  
        patArr[pat[statWin].charCodeAt()-97]=1;
        allArr[s[statWin].charCodeAt()-97]=1;
        statWin++;
    }
    if(JSON.stringify(allArr) === JSON.stringify(patArr)){
        res++;
    }
    // console.log(allArr, patArr)
    let k=0;
    while(statWin<s.length){
        allArr[s[k].charCodeAt()-97] = 0;
        k++;
        allArr[s[statWin].charCodeAt()-97]=1;
        if(JSON.stringify(patArr) === JSON.stringify(allArr)){
            res++;
        }
        statWin++;
    }
    return res;
}
let s='forxxorfxdofr';
let pat = 'for';
console.log(findAnnagram(s, pat));
