const arr = [1,2,3,4,5];
const arr1 = [6,7,8,9];
const arr2 = [];

for(let i=0; i<arr.length; i++){
    arr2[i] = arr[i];
}

for(let i=0; i<arr1.length; i++){
    arr2[arr1.length+i] = arr1[i];
}
console.log(arr2);
