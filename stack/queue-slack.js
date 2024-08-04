class Queue{
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }
    enQueue(x){
        this.s1.push(x);
    }
    deQueue(){
        // if bot stack are empty
        if(this.s1.length == 0 && this.s2.length == 0){
            return -1;
        }

        // if s2 is empty , move
        // element from s1
        if(this.s2.length == 0){
            while(this.s1.length != 0){
                this.s2.push(this.s1[0]);
                this.s1.shift();
            }
        }

        // return the top item from s2
        let x = this.s2[0];
        this.s2.shift();
        return x;

    }
}

// Driver code
let q = new Queue();
q.enQueue(1);
q.enQueue(2);
q.enQueue(3);

console.log(q);
console.log(q.deQueue());
console.log(q.deQueue());
q.enQueue(2)
console.log(q);