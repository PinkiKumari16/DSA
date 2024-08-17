class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// traversal on tree.
function bfs(root){
    if(!root) return;
    let queue = [root];
    while(queue.length>0){
        let node = queue.shift();
        console.log(node.data, " ");
        if(node.left)queue.push(node.left);
        if(node.right)queue.push(node.right);
    }
}

function deletationElemet(root, ele){
    if(!root)return;

    let queue = [root];
    while(queue.length>0){
        let node = queue.shift();
        if(node.data === ele){
            if(node.left){
                node.data = node.left;
                return root;
            }
            else if(node.right){
                node.data = node.right;
                return root; 
            }
        }
        else{
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
    }
}


let root = new Node(2);
root.left = new Node(4);
root.right = new Node(1);
root.right.left = new Node(8);

bfs(root)
deletationElemet(root, 2);
console.log('After detation elements')
bfs(root)