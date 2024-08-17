class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function searchElemet(root, target){
    if(!root) return false;

    let queue = [root];
    while(queue.length>0){
        let node = queue.shift();
        if(node.data === target){
            return true;
        }
        if(node.left)queue.push(node.left);
        if(node.right)queue.push(node.right);
    }
    return false;
}



// let root = null;
let root = new Node(10);
root.left = new Node(8);
root.right = new Node(4);
root.right.right = new Node(34);
console.log(searchElemet(root, 10));
