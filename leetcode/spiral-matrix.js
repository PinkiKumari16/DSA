// Given an m x n matrix, return all elements of the matrix in spiral order.

function spiralMatrix(mat){
    let n=mat.length;
    let m=mat[0].length;

    let top=0;
    let left=0;
    let bottom=n;
    let right=m;

    let res=[];
    while(left<right && top<bottom){
        for(let i=left; i<right; i++){
            res.push(mat[top][i])
        }
        top++;
        for(let i=top; i<bottom; i++){
            res.push(mat[i][right-1])
        }
        right--;
        if(top<bottom){
            for(let i=right-1; i>=left; i--){
                res.push(mat[bottom-1][i])
            }
            bottom--;
        }
        if(left<right){
            for(let i=bottom-1; i>=top; i--){
                res.push(mat[i][left]);
            }
            left++;
        }
    }
    return res;
}
let mat = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralMatrix(mat))