class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let l = 4;
let n = 5;

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let forth = new Node(4);
let fifth = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

head.next = second;
second.next = third;
third.next = forth;
forth.next = fifth;
fifth.next = six;
six.next = seven;
seven.next = eight;
eight.next = nine;

let findLastNthNode = (newArr, n, l, c=0) => {
    if(n>l){
        return -1;
    }
    while(newArr !== null){
        if(l-c === n){
            return newArr.data;
        }
        newArr = newArr.next;
        c++;
    }
}

let element = findLastNthNode(head, n,l)
console.log(element);