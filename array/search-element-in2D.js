function searchElement(arr, target){
    let row=0;
    let col = arr[0].length-1;
    while(row<arr.length && col>=0){
        if(arr[row][col]===target){
            return [row, col];
        }
        else if(arr[row][col]>target){
            col--;
        }
        else{
            row++;
        }
    }
    // console.log('pinki')
    return[-1,-1]

}
let arr = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
console.log(searchElement(arr, 5));
console.log(searchElement(arr, 20));