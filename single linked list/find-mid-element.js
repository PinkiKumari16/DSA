class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let n = 6;

let head = new Node(2);
let second = new Node(4);
let third = new Node(6);
let forth = new Node(7);
let fifth = new Node(5);
let six = new Node(1);

head.next = second;
second.next = third;
third.next = forth;
forth.next = fifth;
fifth.next = six;

let findMidData = (newArr, c=0) => {
    let midIndex = Math.floor(n/2)
    while(newArr !== null){
        if(midIndex === c){
            return newArr.data;
        }
        newArr = newArr.next;
        c++;
    }
}

let res = findMidData(head)
console.log(res);