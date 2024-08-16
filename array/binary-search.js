function searchMatrix(matrix, target){
    if(!matrix.length) return false;

    let row=matrix.length;
    let col = matrix[0].length;
    // console.log(row, col); 

    let left = 0;
    let right = row*col-1;

    while(left<=right){
        let midInd = Math.floor((left+right)/2);
        // console.log(midInd);

        let i=Math.floor(midInd/col);
        let j=midInd%col;                                         
        midVal = matrix[i][j];
        // console.log(midVal)

        if(midVal===target){
            return [i,j];
        }
        else if(midVal>target){
            right=midInd-1;
        }
        else{
            left=midInd+1;
        }

    }
    return [-1,-1];
}

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]
];

console.log(searchMatrix(matrix, 3)); // true
console.log(searchMatrix(matrix, 30)); // false