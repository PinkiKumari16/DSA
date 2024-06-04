let input = require('readline-sync');

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


let link_list = new List()
link_list.push(1)
link_list.push(2)
link_list.push(1)
link_list.push(2)
link_list.push(1)
// link_list.push(3)
// link_list.push(1)
// link_list.print(link_list.head)

let giveOccurenceInteger = (head, key) => {
    let occu = 0;
    while(head !== null){
        if(head.data === key){
            occu++;
        }
        head = head.next;
    }
    return occu;
}
let key = + input.question('key: ');
console.log(giveOccurenceInteger(link_list.head, key))


