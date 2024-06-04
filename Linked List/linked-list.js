//  //  **************   Singly Linked List   ******************
//class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// function printList(arr){
//     while(arr !== null){
//         console.log(arr.data);
//         arr=arr.next;
//     }
// }


// let head = null;
// let second = null;
// let third = null;

// head = new Node();
// second = new Node();
// third = new Node();

// head.data = 1;
// head.next = second;

// second.data = 2;
// second.next = third;

// third.data= 3;
// third.next = null;
// printList(head);



// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let head = new Node(10);
// let second = new Node(12);
// let third = new Node(43);
// let forth = new Node(74)
// let fifth = new Node(100);

// head.next = second;
// second.next = third;
// third.next = forth;
// forth.next = fifth;

// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }

////   searching data in the singly linked list   ***********************
// class Node{
//     constructor(value){
//         this.data = value;
//         this.next = null;
//     }
// }

// let fist = new Node(5);
// let second = new Node(2);
// let third = new Node(9);
// fist.next = second;
// second.next = third;

// let searchVal = 3;
// let isPresent= false;
// while(fist !== null){
//     if(fist.data === searchVal){
//         isPresent = true;
//         break;
//     }
//     fist = fist.next;
// }
// if(isPresent){
//     console.log('data is Present in linked list.')
// }else{
//     console.log('data not present.')
// }



// ////  **********************  create linked list according to the user.
// let input = require('readline-sync');
// class Node{
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// let n = Number(input.question('n: '));
// let a;
// let ;
// while(n){
//     a = new Node(Number(input.question('data: ')));
//     a
//     n--;
// }
// console.log(a);

/////    incompleted

// let v = 'a';
// let c = v.charCodeAt(0);
// console.log(c);
// let n = String.fromCharCode(++c);
// console.log(n);


//// **************   find the length of linked list   **************
// class Node{
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// let head = new Node(3);
// let second = new Node(5);
// let third = new Node(1);

// head.next = second;
// second.next = third;

// let listSize = 0;
// while(head !== null){
//     listSize++;
//     head = head.next;
// }
// console.log(listSize);


//////  *******   insert the data begining/start/front of the linked list.    *************
// class Node{
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// let head = new Node(5);
// let second = new Node(8);
// let third = new Node(2);

// head.next = second;
// second.next = third;

// let newNode = new Node(10);
// newNode.next = head;
// head = newNode;

// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }

/////  insert the value at the end of linked list     ****************
// class Node{
//     constructor(ele){
//         this.element = ele;
//         this.next = null;
//     }
// }

// let head = new Node(4);
// let second = new Node(2);
// let third = new Node(9);
// head.next = second;
// second.next = third;
// if(head.next === null){
//     head = new Node(76)
// }
// let newEle = new Node(76);
// third.next = newEle;

// while(head !== null){
//     console.log(head.element);
//     head = head.next;
// }

////  insert data at the end with using function 
// let appendData = (head,val) => {
//     if(head === null){
//         head = new Node(val);
//         return;
//     }
//     let newNode = new Node(val);
//     let last = head;
//     while(last !== null){
//         if(last.next == null){
//             last.next = newNode;
//             return
//         }
//         last = last.next;
//     }
//     return;

// }
// appendData(head, 90)

// while(head !== null){
//     console.log(head.element);
//     head = head.next;
// }


//// insert data in the specific position   ********************
// class Node{
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// let head = new Node(4);
// let second = new Node(5);
// head.next = second;

// let insertData = (head, pos, element) => {
//     let newNode = new Node(element);
//     if(pos == 0){
//         newNode.next = head;
//         head = newNode;
//         return;
//     }
//     let counter = 0;
//     let curr = head;
//     while(curr !== null){
//         counter++;
//         if(counter === pos){
//             console.log(curr)
//             newNode.next = curr.next
//             curr.next = newNode;
//             return;
//         }
//         curr = curr.next;
//     }
// }
// insertData(head, 2, 45);
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }


//////  ************  


////  *** *************  Doubly Linked List  ************************
// class Node {
//     constructor(data){
//         this.data = data;
//         this.pre = null;
//         this.next = null;
//     }
// }

// let head = new Node(2);
// let second = new Node(21);
// let third = new Node(43);
// let forth = new Node(87);

// head.next = second;
// second.pre = head;
// second.next = third;
// third.pre = second;
// third.next = forth;
// forth.pre=third;

// console.log(head);


// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }



// ////  **************************  detate the data from start, beining   ************************
// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let head = new Node(3);
// let second = new Node(8);
// let third = new Node(5);
// let forth = new Node(9);

// head.next = second;
// second.next = third;
// third.next = forth;

// let shiftElement = (newHead) => {
//     return head=newHead.next
// }
// shiftElement(head);

// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }


// //// **********************  delete the last element  ****************
// class Node{
//     constructor(val){
//         this.data = val;
//         this.next = null;
//     }
// }

// let head = new Node(4);
// let second = new Node(1);
// let third = new Node(3);
// let forth = new Node(9);

// head.next = second;
// second.next = third;
// third.next = forth;

// let popElement = (newArr) => {
//     if(newArr === null){
//         console.log('Array is empty.')
//         return
//     }
//     else{
//         let secNode;
//         while(newArr.next !== null){
//             secNode = newArr;
//             newArr = newArr.next;
//         }
//         console.log(secNode);
//         secNode.next = null;
//         return
//     }
// }
// popElement(head);

// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }



////// *************  delete data at specific position    *******************
// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// let head = new Node(3);
// let second = new Node(1);
// let third = new Node(4);
// let forth = new Node(9);

// head.next = second;
// second.next = third;
// third.next = forth;

// let deleteSpeficElement = (newArr, pos, c=0) => {
//     if(newArr === null){
//         console.log('array is empty')
//     }
//     if(pos === 0){
//         newArr = newArr.next;
//         head = newArr;
//         return
//     }
//     let preNode;
//     while(newArr !== null){
        
//         if(c === pos){
//             preNode.next = newArr.next;
//             return
//         }
//         preNode = newArr;
//         newArr = newArr.next;
//         c++;
//     }
    
// }
// deleteSpeficElement(head, 3)
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }



//// ***************************  make a linked list  ************
// class NewNode{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class LinkedLinks{
//     constructor(){
//         this.head = null;
//     }
//     append(data){
//         if(this.head === null){
//             this.head = new NewNode(data);
//         }
//         else{
//             let current = this.head;
//             while(current.next !== null){
//                 current = current.next;
//             }
//             current.next = new NewNode(data);
            
//         }
//     }
// }
// let list1 = new LinkedLinks()
// list1.append(3)
// list1.append(6);


//// **********************  make a linkdlist according to the user.
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

let printElemlent = (arr) => {
    if(arr === null){
        console.log('list is empty.')
        return
    }
    while(arr !== null){
        console.log(arr.data);
        arr=arr.next;
    }
}

class LinkList {
    constructor(){
        this.head = null;
    }

    append(data){
        if(this.head === null){
            this.head = new Node(data);
        }
        else{
            let curr = this.head;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = new Node(data);
        }
        return
    }
}
let link_list = new LinkList();

let input = require('readline-sync');
let n = + input.question('n: ');
for (let i =0 ; i<n; i++){
    let element = + input.question('elememnt: ');
    link_list.append(element);

}
console.log(link_list)
printElemlent(link_list.head);
