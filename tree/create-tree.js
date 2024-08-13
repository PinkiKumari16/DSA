let N=7;
let Root=1;
let adj = new Array(N+1).fill(null).map(()=>[]);

function addEdge(x,y,arr){
    arr[x].push(y);
    arr[y].push(x);
}

ddEdge(1, 2, adj);
addEdge(1, 3, adj);
addEdge(1, 4, adj);
addEdge(2, 5, adj);
addEdge(2, 6, adj);
addEdge(4, 7, adj);