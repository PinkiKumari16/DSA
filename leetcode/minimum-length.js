// You are given two arrays A and B, of length N . You can select any subarray and then sort the elements in ascending order of that subarray for arrays and 
// . Find the minimum length of the subarray you can choose to make and same after performing the operation. and are permutations of each other.

function main(input){
    let lines = input.trim().split('\n');
    let t= parseInt(lines[0]);
    let i=1;
    while(t--){
        let n = Number(lines[i]);
        let arrA = lines[i+1].split(' ').map(Number);
        let arrB = lines[i+2].split(' ').map(Number);

        let sta=0;
        while(sta<n){
            if(arrA[sta]===arrB[sta]){
                sta++;
                continue;
            }
            break;
        }
        let end = n-1;
        while(end>=0){
            if(arrA[end]===arrB[end]){
                end--;
                continue;
            }
            break;
        }
        console.log(end-sta+1);
        i+=3;
    }
}
let input = "2\n3 \n2 3 1\n2 1 3\n4\n1 1 2 1\n2 1 1 1";
main(input);