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
            return;
        }
        else{
            let curr = this.head;
            while(curr.next !== null){
                curr = curr.next;
            }
            curr.next = new Node(data);
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

let link_list = new List();
link_list.push(3)
link_list.push(8)
link_list.push(1)
// print(link_list.head)

let removeDublicate = (arr) =>{
    let uniq_ele=toString(toString(arr.data));
    console.log(uniq_ele);
    
    while(arr !== null){
        let pre = arr;
        arr = arr.next;
        if(uniq_ele.includes(toString(arr.next))){
            pre.next = arr.next;
        }
        uniq_ele+=toString(arr.data);

        arr = arr.next;

    }

}
removeDublicate(link_list)
// print(link_list);
