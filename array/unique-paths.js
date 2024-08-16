function uniquePaths(m,n){
    if(n===1 || m===1) return 1;
    let res = [];
    for(let row=1; row<m; row++){
        if(res.length===0){
            for(let ele=1; ele<=n; ele++){
                res.push(ele);
            }
        }
        else{
            let sum1=0;
            for(let i=0; i<n; i++){
                sum1+=res[i];
                res[i]=sum1;
            }
        }
    }
    return res[n-1];
}
let m=3, n=7;
console.log(uniquePaths(m,n));