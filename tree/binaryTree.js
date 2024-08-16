// class TreeNode{
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// let root = new TreeNode(10);
// let leftChild = new TreeNode(2);
// let rightChild = new TreeNode(3);
// let thirdChild = new TreeNode(7);

// root.left=leftChild;
// root.right = rightChild;
// leftChild.left = thirdChild;
// console.log(root);



class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function preOrder(tree){
    if(tree===null) return;
    console.log(tree.data + ' ');
    preOrder(tree.left);
    preOrder(tree.right);
}
function inOrder(tree){
    if(tree===null) return;
    inOrder(tree.left);
    console.log(tree.data + ' ');
    inOrder(tree.right);
}
function postOrder(tree){
    if(tree===null)return;
    postOrder(tree.left);
    postOrder(tree.right);
    console.log(tree.data + ' ');
}


let root = new Node(2);
root.left = new Node(3);
root.right = new Node(4);
root.left.left = new Node(5);
root.left.right = new Node(6);

console.log('In-Order DFS: ');
inOrder(root);
console.log('Pre Order DFS: ');
preOrder(root);
console.log('Post Order DFS: ');
postOrder(root);