function findLongestSubStringUnic(s){
    let setArr=new Set();
    let n=s.length;
    let maxLen = 0;
    let startWin = 0;
    let endWin = 0;
    while(endWin<n){
        if(setArr.has(s[endWin])){
            maxLen = Math.max(maxLen, endWin-startWin)
            while(startWin<endWin && setArr.has(s[endWin])){
                setArr.delete(s[startWin]);
                startWin++;
            }
        }
        setArr.add(s[endWin]);
        endWin++;
    }
    maxLen = Math.max(maxLen, endWin-startWin-1);
    return maxLen=(maxLen===0)?-1:maxLen
}
let s='bbbb';
console.log(findLongestSubStringUnic(s));