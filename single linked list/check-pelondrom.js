class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let n = 4;

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let forth = new Node(4);

head.next = second;
second.next = third;
third.next = forth;


let checkPalindrom = (array) => {
    let str = '';
    let rev = '';
    while(array !== null){
        str+=String(array.data)
        rev = String(array.data) + rev;
        
        array = array.next;
    }
    if(str === rev){
        return 1;
    }
    return -1;
}
let isPalindrom = checkPalindrom(head);
console.log(isPalindrom);
