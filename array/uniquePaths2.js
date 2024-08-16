var uniquePathsWithObstacles = function(obs) {
    if(obs[0][0]===1) return 0;
    let row=obs.length;
    let col= obs[0].length;
    let arr=new Array(row).fill(0)
    arr=arr.map(()=>new Array(col).fill(0))
    

    for(let i=0; i<row; i++){
        if(obs[i][0]===1){
            arr[i][0]=0;
            break
        }
        else{
            arr[i][0]=1;
        }
    }
    for(let i=0; i<col; i++){
        if(obs[0][i]===1){
            arr[0][i]=0;
            break;
        }
        else{
            arr[0][i]=1;
        }
    }
    for(let i=1; i<row; i++){
        for(let j=1; j<col; j++){
            if(obs[i][j]===1){
                arr[i][j]=0;
            }
            else{
                arr[i][j]=arr[i-1][j]+arr[i][j-1];
            }
        }
    }
    return arr[row-1][col-1];

};
let obstacleGrid = [[0,1],[0,0]];
console.log(uniquePathsWithObstacles(obstacleGrid));