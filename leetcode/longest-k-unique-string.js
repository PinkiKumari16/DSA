function longestUniqueString(s,k){
    let maxLen=0;
    let feq = {'a':0,'b':0,'c':0,'d':0,'e':0};
    let startWin = 0;
    let endWin = 0;
    let occ = 0;

    while(endWin<s.length){
        if(feq[s[endWin]] === 0){
            occ++;
            feq[s[endWin]]++;
        }
        else{
            feq[s[endWin]]++;
        }
        if(occ===k){
            maxLen = Math.max(maxLen, endWin-startWin+1);
        }
        else if(occ>k){
            while(startWin<endWin && k<occ){
                feq[s[startWin]]--;
                if(feq[s[startWin]]===0){
                    occ--;
                }
                startWin++;
            }
        }
        endWin++;
    }
    maxLen = Math.max(maxLen, endWin-startWin);
    return (maxLen==0)? -1: maxLen;
}
let s='aabacbebebe';
let k=3;
console.log(longestUniqueString(s,k));

