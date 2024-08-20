let n=3, m=4;
// let mat = [[1,0,1,2],[0,2,4,1],[1,2,1,0]];
// q=[[0,0,1,1,2]];

let mat = [[3,2,1],[2,4,4]];
q=[[0,1,1,2,-1],[0,0,1,1,5]];


for(let query of q){
    let k = query[4];

    let i=query[0];
    while(i<=query[2]){

        let j=query[1];
        while(j<=query[3]){
            mat[i][j] = (mat[i][j]+k)
            j++;
        }
        i++;
    }
}
console.log(mat);