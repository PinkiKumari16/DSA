const a = [1,4,5];
const b = [2,3,23,45];

const c = [];
let j=0;
let i=0;
let x=0;

while(i<a.length || i<b.length){
    if(a[i]<=b[j] || b[j]===undefined){
        c[x]=a[i];
        i++;
    }
    else if(b[j]<a[i] && ){
        c[x]=b[j];
        j++;
    }
    x++;
}
console.log(c)