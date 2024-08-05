class Queue{
    constructor(capacity){
        this.front = 0;
        this.rear = -1;
        this.capacity = capacity;
        this.queue = new Array(capacity);
    }

    enqueue(data){
        if(this.rear===this.capacity-1){
            console.log('Queue is full....')
            return;
        }
        this.queue[++this.rear]=data;
    }

    dequeue(){
        if(this.front>this.rear){
            console.log('Queue is Empty..');
            return
        }

        for(let i=0; i<=this.rear; i++){
            this.queue[i]=this.queue[i+1];
        }
        this.rear--;
    }

    display(){
        if(this.front>this.rear){
            console.log('Queue is Empty.')
            return;
        }
        let result='';
        for(let i=this.front; i<=this.rear; i++){
            result+= this.queue[i]+'<--';
        }
        console.log(result);
    }

    frontElement(){
        if(this.rear===-1){
            console.log('Queue is Empty');
            return;
        }
        console.log('Front Element is: '+ this.queue[this.front]);
    }
}

let q = new Queue(5);
q.display();
q.enqueue(20)
q.enqueue(40)
q.enqueue(60)
q.enqueue(80)

q.display()

q.dequeue()
q.display()
q.frontElement();