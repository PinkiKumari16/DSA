class Stack{
    constructor(){
        this.queue = [];
    }
    push(ele){
        this.queue.push(ele);
        for(let i = 0;  i<this.queue.length; i++){
            this.queue.push(this.queue.shift())
        }
    }
    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue.shift();
    }
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length === 0;
    }
    clear(){
        let temQueue = this.queue;
        this.queue = []
        return temQueue;
    }
}

let stack = new Stack()
console.log(stack);
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
stack.pop()
console.log(stack)
console.log(stack.peek())
console.log(stack)
stack.clear()
console.log(stack)
