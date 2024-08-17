class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Insert data in the left side....
function insertDataInLeft(root, ele){
    if(!root){
        return root = new Node(ele)
    }

    let queue = [root];
    while(queue.length>0){
        let node = queue.shift();

        // insert in the left node...
        if(node.left === null){
            node.left = new Node(ele);
            break;
        }
        else{
            queue.push(node.left)
        }

        // insert in the right node...
        if(node.right === null){
            node.right = new Node(ele);
            break;
        }
        else{
            queue.push(node.right);
        }
    }
}

//  in order travarsel in tree.
function inOrder(root){
    if(root === null)return;
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right)
}

let root1 = null;
console.log(insertDataInLeft(null, 3));


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);

inOrder(root);
insertDataInLeft(root, 10);
inOrder(root)


