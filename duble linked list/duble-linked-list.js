// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }

// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;

// second.pre=head;
// second.next = third;

// third.pre=second;
// third.next = forth;

// forth.pre=third;
// forth.next = tail;

// tail.pre=forth;


// ////  *************  print list in start to end    *************
// console.log('print element start to end .....................');
// while(head !== null){
//     console.log(head.data,end = " ")
//     head = head.next;
// }
// console.log('print element end to start.................')
// while(tail !== null){
//     console.log(tail.data);
//     tail = tail.pre;
// }



// ////  ********************   find the lenght of linked list 
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;

// second.pre=head;
// second.next = third;

// third.pre=second;
// third.next = forth;

// forth.pre=third;
// forth.next = tail;

// tail.pre=forth;

// let findLength = (arr) => {
//     let len = 0;
//     while(arr !== null){
//         len++;
//         arr=arr.next;
//     }
//     return len;
// }

// let len = findLength(head);
// console.log('length of list : ',len);




// //// find element is present or not in the list    **************************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;

// second.pre=head;
// second.next = third;

// third.pre=second;
// third.next = forth;

// forth.pre=third;
// forth.next = tail;

// tail.pre=forth;

// let isElementPresent = (arr, ele) => {
//     let flag = false;
//     let c=0
//     while(arr !== null){
//         if(arr.data === ele){
//             flag = true;
//             break
//         }
//         arr = arr.next;
//         c++;
//     }
//     if(flag){
//         return c;
//     }
//     else{
//         return -1;
//     }
// }

// let ind = isElementPresent(head, 2)
// console.log(ind);



////  ******************  insett in the beining of the list  *****************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;

// second.pre=head;
// second.next = third;

// third.pre=second;
// third.next = forth;

// forth.pre=third;
// forth.next = tail;

// tail.pre=forth;


// let unshiftElement = (arr, ele) => {
//     let newNode = new Node(ele);
//     arr.pre = newNode;
//     newNode.next = arr;
//     head = newNode;
//     return;
// }
// unshiftElement(head, 91);
// console.log(head);
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }



// ////  insert element at the end of the list  *********************************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;

// second.pre=head;
// second.next = third;

// third.pre=second;
// third.next = forth;

// forth.pre=third;
// forth.next = tail;

// tail.pre=forth;

// let pushData = (newArr, ele) => {
//     let newNode = new Node(ele);
//     while(newArr !== null){
//         if(newArr.next === null){
//             newArr.next = newNode;
//             newNode.pre = newArr;
//             return
//         }
//         newArr = newArr.next;
//     }
// }
// pushData(head, 98);
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }





// ////  insert element at the perticular position in the list  *********************************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;

// second.pre=head;
// second.next = third;

// third.pre=second;
// third.next = forth;

// forth.pre=third;
// forth.next = tail;

// tail.pre=forth;

// let insertData = (newArr, pos, ele, c=0) => {
//     let newNode = new Node(ele);
//     if(newArr === null){
//         head = newNode;
//         return;
//     }
//     else if(pos === 0){
//         newNode.next = newArr;
//         newArr.pre = newNode;
//         head = newNode;
//         return;
//     }
//     else{
//         while(newArr !== null){
//             if(pos === c){
//                 let preData = newArr.pre;
//                 newNode.next = newArr;
//                 preData.next = newNode;
//                 return;
//             }
//             newArr = newArr.next;
//             c++;

//         }
//     }
// }

// insertData(head, 3, 93)
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }


// /////  delete data at the beining of the list    *****************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(22)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(1)

// head.next = second;
// second.pre = head;
// second.next = third;
// third.pre = second;
// third.next = forth;
// forth.pre = third;
// forth.next = tail;
// tail.pre = forth;

// let unshift = (arr) => {
//     if(arr === null){
//         console.log('List is empty.')
//     }
//     let newArr = arr.next;
//     newArr.pre = null
//     head = newArr;
//     arr.next = null
//     return
// }
// unshift(head);
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }



// ////   deletation element from the end of the list   ********************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(12)

// head.next = second;
// second.pre = head;
// second.next = third;
// third.pre = second;
// third.next = forth;
// forth.pre = third;
// forth.next = tail;
// tail.pre = forth;

// let popElement = (arr) => {
//     if(arr === null){
//         console.log('list is empty.')
//         return;
//     }
//     else{
//         let curr;
//         while(arr !== null){
//             if(arr.next !== null){
//                 curr = arr;
//             }
//             arr=arr.next;
//         }
//         let del = curr.next;
//         curr.next = null;
//         del.pre = null;
//         return;
//     }
// }
// popElement(head)
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }



// ////   deletation element perticular position of the list   ********************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(12)

// head.next = second;
// second.pre = head;
// second.next = third;
// third.pre = second;
// third.next = forth;
// forth.pre = third;
// forth.next = tail;
// tail.pre = forth;

// let spliceElement = (arr, pos,c=0) => {
//     if(arr === null){
//         console.log('List is empty.');
//         return;
//     }
//     else if(pos === 0){
//         let curr = arr.next;
//         curr.pre = null;
//         head = curr;
//         arr.next = null;
//         return;
//     }
//     else{
//         while(arr !== null){
//             if(pos === c){
//                 let curr = arr.pre;
//                 curr.next = arr.next;
//                 arr.pre = null;
//                 arr.next = null;
//                 return;
//             }
//             arr=arr.next;
//             c++;
//         }
//     }
// }

// spliceElement(head,5)

// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }


// ////   deletation perticuar given element in the list   ********************
// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.pre = null;
//     }
// }
// let head = new Node(2)
// let second = new Node(7)
// let third = new Node(5)
// let forth = new Node(9)
// let tail = new Node(12)

// head.next = second;
// second.pre = head;
// second.next = third;
// third.pre = second;
// third.next = forth;
// forth.pre = third;
// forth.next = tail;
// tail.pre = forth;

// let removeElement = (arr, ele) => {
//     let curr;
//     if(arr.data === ele){
//         curr = arr.next;
//         arr.next = null;
//         head = curr;
//         return
//     }
//     else{
//         while(arr !== null){
//             if(arr.data === ele){
//                 curr = arr.pre;
//                 curr.next = arr.next;
//                 arr.pre = null;
//                 arr.next = null;
//                 return;
//             }
//             arr= arr.next;
//         }
//         console.log('Element not found');
//     }
    
// }
// removeElement(head, 7)
// while(head !== null){
//     console.log(head.data);
//     head = head.next;
// }


