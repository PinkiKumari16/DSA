function minimumWindowSubstring(s,t){
    let mapObject = new Map();
    for(let i=0; i<t.length; i++){
        if(!mapObject.has(t[i])){
            mapObject.set(t[i],0)
        }
        mapObject.set(t[i],mapObject.get(t[i])+1)
    }
    // console.log(mapObject)

    let subLen = s.length+1;
    let unique = mapObject.size;
           
    let startWin = -1;
    let start=0;
    let end = 0;
    while(end<s.length){
        if(mapObject.has(s[end])){
            mapObject.set(s[end], mapObject.get(s[end])-1)
            if(mapObject.get(s[end])===0){
                unique--;
            }
        }

        while(unique===0){
            if(end-start+1<subLen){
                subLen = end-start+1;
                startWin = start;
            }

            if(mapObject.has(s[start])){
                mapObject.set(s[start], mapObject.get(s[start])+1)
                if(mapObject.get(s[start])>0){
                    unique++;
                }
            }
            start++;
        }
        end++;
    }
    if(startWin === -1){
        return "";
    }
    return s.slice(startWin, startWin+subLen);



}
let s='ADOBECODEBANC';
let t='ABC';
console.log(minimumWindowSubstring(s,t));