// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let head = new Node(3);
// let sec  = new Node(6);

// head.next = sec;
// sec.next = head;

// let arr=head;;
// do{
//     console.log(arr.data);
//     arr = arr.next;
// }
// while(head !== arr){
// }

// class Node{
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// let head = new Node(1);
// let sec = new Node(3);
// let third = new Node(5);

// head.next = sec;
// sec.next = third;
// third.next = head;
// let arr = head;
// do{
//     console.log(arr.data);
//     arr = arr.next;
// }
// while(head !== arr){
// }



class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

let head = new Node(1);
let sec = new Node(3);
let third = new Node(2);

head.next = sec;
sec.next = third;
third.next = head;


let printElemlent = (arr)=>{
    do{
        console.log(arr.data);
        arr = arr.next;
    }
    while(head !== arr){
    }
}
// printElemlent(head)


let insertBefore = (arr,ele)=>{
    let newNode = new Node(ele);
    newNode.next = arr;
    if(arr === null){
        head = newNode;
        return
    }
    else{
        do{
            arr= arr.next;
        }
        while(head !== arr.next){

        }
        arr.next = newNode;
        head=newNode;
        return
    }
}

// insertBefore(head,15)
// printElemlent(head);



let insertAfter = (arr, ele) => {
    let newNode = new Node(ele);
    if(arr === null){
        head = newNode;
        return
    }
    else{
        newNode.next = arr;
        do{
            arr=arr.next;
        }
        while(head !== arr.next){
        }
        arr.next = newNode;
        return
    }
}
// insertAfter(head, 14);
// printElemlent(head);


let insetBetween = (arr, ele, pos,c=1) =>{
    let newNode = new Node(ele);
    if(pos === 0){
        newNode.next = arr;
        do{
            arr=arr.next;
        }
        while(head !== arr.next){}
        arr.next = newNode;
        head = newNode;
        return;
    }
    else{
        do{
            if(c===pos){
                newNode.next = arr.next;
                arr.next = newNode;
                return
            }
            arr = arr.next;
            c++;
        }
        while(head !== arr){}
    }
}
// insetBetween(head, 23,2)
// printElemlent(head)


let shiftElement = (arr) => {
    if(arr === null){
        console.log('list is empty.')
        return
    }
    else{
        let newArr = arr.next;
        do{
            arr = arr.next;
        }
        while(head !== arr.next){}
        arr.next = newArr;
        head = newArr;
        return
    }
}
// shiftElement(head);
// printElemlent(head);



let popElement = (arr) =>{
    if(arr === null){
        console.log('list is empty.');
    }
    else{
        let preNode = arr;
        do{
            preNode=arr;
            arr=arr.next;
        }
        while(head !== arr.next){}
        preNode.next = arr.next;
        return;

    }
}
// popElement(head);
// printElemlent(head);

let removeAtPosition = (arr,pos,c=1) => {
    if(arr === null){
        console.log('list is empty.');
        return
    }
    
    else if(pos === 0){
        let curr = arr.next;
        do{
            arr = arr.next;
        }
        while(head !== arr.next){}
        arr.next = curr;
        head = curr;
        return
    }
    else{
        let curr=arr;
        do{
            curr = arr;
            arr = arr.next;
            if(pos === c){
                curr.next = arr.next;
                return;
            }
            c++;
        }
        while(head !== arr.next){}
    }
}

// removeAtPosition(head, 2);
// printElemlent(head);

let removeElementByValue = (arr, ele)=>{
    if(arr === null){
        console.log('list is empty.');
        return;
    }
    else if(arr.data === ele){
        let curr = arr.next;
        do{
            arr= arr.next;
        }
        while(head !== arr.next){}
        arr.next = curr;
        head  = curr;
        return
    }
    else{
        let curr;
        do{
            curr = arr;
            arr = arr.next;
            if(arr.data === ele){
                curr.next = arr.next;
                return;
            }
        }
        while(head !== arr.next){}
    }
}
// removeElementByValue(head, 2)
// printElemlent(head)