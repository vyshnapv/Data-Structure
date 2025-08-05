class Queue{
    constructor(){
        this.queue=[]
    }
    enqueue(value){
        this.queue.push(value)
    }
    
    dequeue(){
          if(this.isEmpty()){
            console.log("stack underflow")
        }
        return this.queue.shift()
    }
    
    peek(){
          if(this.isEmpty()){
            console.log("stack underflow")
            return null;
        }
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length===0
    }
    print(){
        console.log(this.queue)
    }
}

function reverse(str){
    let que=new Queue();
    let stack=[];
    
    for(let char of str){
        que.enqueue(char)
    }
    
    while(!que.isEmpty()){
        stack.push(que.dequeue())
    }
    
    let reversed="";
    while(stack.length>0){
        reversed+=stack.pop()
    }
    return reversed
}  

let original="hello"
let reversed=reverse(original)
console.log(reversed)
