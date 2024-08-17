class Stack{
    constructor(){
        this.stack = [];
    }
    push(ele){
        this.stack.push(ele);
    }
    pop(){
        if(this.stack.length===0)return -1;
        return this.stack.pop();
    }
    peek(){
        if(this.stack.length===0)return -1;
        return this.stack[this.stack.length-1]
    }
    isEmpty(){
        return (!this.stack.length);
    }
}

function largestRectangle(heights){
    let stack = new Stack();
    let maxArea = 0;
    for(let i=0; i<=heights.length; i++){
        let element = (i===heights.length)? 0: heights[i];
        while(!stack.isEmpty() && element<heights[stack.peek()]){
            let h=heights[stack.pop()];
            let preInd = stack.peek();
            let w = i-preInd-1;
            maxArea = Math.max(maxArea, h*w);
        }
        stack.push(i);
    }
    return maxArea;
} 




let heights = [2,1,5,6,2,3];
console.log(largestRectangle(heights));
