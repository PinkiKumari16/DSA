class Queue{
    constructor(n){
        this.queue=new Array(n);
        this.front=0;
        this.rear=-1;
        this.size=n;
    }
    enQueue(ele){
        if(this.rear === this.size-1){
            console.log('Queue is Full.........');
            return
        }
        this.queue[++ this.rear]=ele;
    }
    deQueue(){
        if(this.front>this.rear){
            console.log('Queue is Empty.')
            return
        }
        for(let i=0; i<=this.rear; i++){
            this.queue[i]=this.queue[i+1];
        }
        this.rear--;

    }
    frontElement(){
        if(this.rear ===-1){
            console.log('Queue is Empty.');
            return 0;
        }
        console.log(this.queue[this.front]);
        return this.queue[this.front];
    }
}



// const arr = [12,-1,-7, 8,-15, 30,16,28];
// let k=3;
// const res = [];

// let queue=new Queue(k);
// for(let i=0; i<k; i++){
//     if(arr[i]<0){
//         queue.enQueue(arr[i]);
//     }
// }
// res.push(queue.queue[0])
// console.log(res);
// console.log(queue.queue)
// for(let i=1; i<arr.length-k+1; i++){
//     if(arr[i+k-1]<0){
//         queue.enQueue(arr[i+k-1]);
//     }
//     if(arr[i-1]<0){
//         queue.deQueue();
//     }
//     res.push(queue.frontElement());
// }
// console.log(res)






// solve without queue 
// const arr = [12,-1,-7, 8,-15, 30,16,28];
// let k=3;
// const res = [];
// for(let i=0; i<arr.length-k+1; i++){
//     for(let j=i; j<i+k; j++){
//         flag=false;
//         if(arr[j]<0){
//             flag=true;
//             res.push(arr[j])
//             break
//         }
//     }
//     if(!flag){
//         res.push(0);
//     }
// }
// console.log(res);

