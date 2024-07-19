// stack class
class Stack{

    // Array is used to implement stack
    constructor(){
        this.items = [];
    }
    // functions to be implemented
    // push(item)
    push(element){
        this.items.push(element);
    }

    // pop()
    pop(){
        if(this.items.length === 0){
            return 'Underflow'
        } 
        return this.items.pop()
    }

    // peek() function
    // return the top most element from the stack but does not delete it.
    peek(){
        return this.items[this.items.length-1];
    }

    // isEmpty()
    isEmpty(){
        return this.items.length == 0;
    }

    // printStack()
    printStack(){
        let str = "";
        for (let i=0; i<this.items.length; i++){
            str += this.items + " ";
            return str;
        }
    }

}

let stack = new Stack()
console.log(stack.isEmpty())
console.log(stack.pop())
stack.push(12)
stack.push(34)
console.log(stack.printStack())
stack.pop()
console.log(stack.items)
stack.push(56)
stack.push(87)
console.log(stack.peek())
console.log(stack.items)
console.log(stack.pop())
console.log(stack.printStack())