class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class List{
    constructor(){
        this.head = null;
    }
    push(data){
        if(this.head === null){
            this.head = new Node(data);
            return
        }
        else{
            let curr = this.head;
            while(curr.next!==null){
                curr = curr.next;
            }
            curr.next = new Node(data);
            console.log(curr.next)
            return;
        }
    }
    print(arr){
        while(arr!==null){
            console.log(arr.data);
            arr= arr.next;
        }
    }
}

let getSize = (head) => {
    let len = 0;
    if(head === null){
        return 0;
    }
    
    while(head !== null){
        len++;
        head = head.next;
    }
    return len;
}

let checkLinkedList = (head,size,c=1) =>{
    if(head === null){
        return 'List is Empty';
    }
    while(true){
        if(c===size){
            if(head.next === null){
                return "This is Linked List.";
            }
            else{
                return "This is Circular Linked List";
            }
        }
        head = head.next;
        c++;

    }

}


let link_list = new List()
link_list.push(3)
link_list.push(10)
link_list.push(12)
link_list.push(45)
link_list.print(link_list.head)
let size = getSize(link_list.head)
console.log(link_list)
console.log(checkLinkedList(link_list.head,size))


