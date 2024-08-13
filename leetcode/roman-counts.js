var romanToInt = function(s) {
    let res=0;
    let sim = {
       'M':1000,
       'D':500,
       'C':100,
       'L':50,
       'X':10,
       'V':5,
       'I':1 
    }
    
    for(let i=0; i<s.length; i++){
        let pre = sim[s[i+1]];
        let curr = sim[s[i]];
        if(curr<pre){
            res+=(pre-curr)
            i++;
        }
        else{
            res+=curr;
        }
    }
    console.log(res);
    return res;

};

let s ="MCMXCIV";
romanToInt(s)