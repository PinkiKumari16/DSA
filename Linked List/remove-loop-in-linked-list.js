class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let n = 4;
let x = 1;

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let forth = new Node(4);

head.next = second;
second.next = third;
third.next = forth;
forth.next = head;


let removeLoop = (newArr, n, x,c=1) => {
    if(newArr === null){
        return 'List is empty.' 
    }
    else if(x === 0){
        return 'The Linked list does not cantains any loop.'
    }
    while(c<n){
        newArr = newArr.next;
        c++;
    }
    newArr.next = null;
    return 1;
}
let res = removeLoop(head,n,x);
res !== 1 && console.log(res)
while(head !== null){
    console.log(head.data);
    head = head.next;
}