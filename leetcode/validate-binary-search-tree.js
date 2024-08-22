class Node{
    constructor(ele){
        this.val = ele;
        this.left = null;
        this.right= null;
    }
}


let root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.right.left = new Node(3);
root.right.right = new Node(6);


function isBST(root){
    function isValid(node, max, min){
        if(!node) return true;
        if(!(node.val>min && node.val<max)) return false;
        return isValid(node.left, node.val, min) && isValid(node.right, max, node.val)
    }
    return isValid(root, Infinity, -Infinity);
}
console.log(isBST(root));

