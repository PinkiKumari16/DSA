class Node{
    constructor(val){
        this.val = val;
        this.left= null;
        this.right = null;
    }
}

function rightSideView(root){
    if(!root) return [];
    let queue = [root];
    let res = [];
    while(queue.length>0){
        let numOfChild = queue.length;
        let lastVal = null;
        for(let i=0; i<numOfChild; i++){
            let node = queue.shift();
            lastVal = node.val;
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        res.push(lastVal);
    }
    return res;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.right = new Node(5);
root.right.right = new Node(4);

console.log(rightSideView(root))