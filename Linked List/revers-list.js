class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkList{
    constructor(){
        this.head = null;
    }
    push(data){
        if(this.head === null){
            this.head = new Node(data);
            return;
        }
        else{
            let curr = this.head;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = new Node(data)
            return;
        }
    }
}

let print = (arr) =>{
    while(arr !== null){
        console.log(arr.data);
        arr = arr.next;
    }
}
let link_list = new LinkList();
link_list.push(1)
link_list.push(2)
link_list.push(3)
link_list.push(4)
link_list.push(5)
link_list.push(6)
// link_list.print()

let reverseList = (head)=>{
    let pre = null;
    let current = head;
    let next = null;
    while(current !== null){
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
        // console.log(pre);
    }
    link_list.head = pre;
    return;

}
// reverseList(link_list.head)
// print(link_list.head);


let rev = (head) => {
    let curr = head;
    let pre = null;
    let next = null;
    while(curr !== null){
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    link_list.head = pre;
    return;
}
// rev(link_list.head)
// print(link_list.head)




class NodeEle{
    constructor(data){
        this.data = data;
        this.pre = null;
        this.next = null;
    }
}
let head = new NodeEle(1);
let sec = new NodeEle(2);
let third = new NodeEle(3);

head.next = sec;
sec.pre = head;
sec.next = third;
third.pre = sec;

let reverseDubleList = (arr) =>{
    let curr = arr.pre;
    let next = null;
    while(arr !== null){
        next = arr.next;
        arr.next = curr;
        curr = arr;
        arr = next;
    }
    head = curr;
    return;
}
// reverseDubleList(head);
// print(head);


let revWithEnd = (arr) =>{
    let head = arr;
    while(arr !== null){
        head.next = arr.pre;
        arr = arr.pre;
    }
    console.log(head)
    

}
revWithEnd(third)
// print(head);
