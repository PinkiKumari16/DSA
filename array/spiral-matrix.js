/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n=matrix.length;
    let m=matrix[0].length;

    let left=0;
    let right=m;
    let top=0;
    let bottom=n;
    let res = [];
    while(left<right && top<bottom){
        for(let i=left; i<right; i++){
            res.push(matrix[top][i]);
            
        }
        top++;
        for(let i=top; i<bottom; i++){
            res.push(matrix[i][right-1]);
            
        }
        right--;
        for(let i=right-1; i>=left; i--){
            res.push(matrix[bottom-1][i]);
            
        }
        bottom--;
        for(let i=bottom-1; i>=top; i--){
            res.push(matrix[i][left]);
            
        }
        left++;
    }
    return res;
    
};