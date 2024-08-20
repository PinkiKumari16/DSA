// let n=6;
// let queries = [[4, 0, 5, 3], [0, 0, 3, 4], [1, 2, 1, 2],[ 1, 1, 2, 3],[ 0, 0, 3, 1],[ 1, 0, 2, 4]];
// // let queries = [[4, 0, 5, 3]];
// let mat = new Array(n);
// mat = mat.map(()=>new Array(n).fill(0));

// for(let query of queries){
//     let row = query[0];
//     while(row <= query[2]){

//         let col = query[1];
//         while(col <= query[3]){
//             // console.log(mat[row][col]+1)
//             mat[row][col] = (mat[row][col]+=1);
//             col++;
//         }
//         row++;
//     }
    
// }
// console.log(mat);


// ************************* Reduse the time complexicy.let n=6;
let n=6;
let queries = [[4, 0, 5, 3], [0, 0, 3, 4], [1, 2, 1, 2],[ 1, 1, 2, 3],[ 0, 0, 3, 1],[ 1, 0, 2, 4]];
// let queries = [[4, 0, 5, 3]];
let mat = new Array(n+2).map(()=>new Array(n).fill(0));

for(let query of queries){
    let a=query[0];
    let b=query[1];
    let c=query[2];
    let d=query[3];
    mat[a][b]++;
    mat[b]--
}
console.log(mat);
