class Stack{
    constructor() {
        this.iteams = [];
    }
    push(ele){
        this.iteams.push(ele);
    }
    pop(){
        if(this.iteams.length === 0){
            return 'Underflow';
        }
        return this.iteams.pop();
    }
    peek(){
        return this.iteams[this.iteams.length-1];
    }
    isEmpty(){
        return this.iteams.length === 0;
    }
}

let stack = new Stack()
stack.push(2)
stack.push(3)
console.log(stack)
stack.pop()
console.log(stack)
console.log(stack.peek())
console.log(stack)
stack.push(4)
console.log(stack.isEmpty())
