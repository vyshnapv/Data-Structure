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
function reverse(queue){
    let stack=[]
    
    while(!queue.isEmpty()){
        stack.push(queue.dequeue())
    }
    
    while(stack.length>0){
        queue.enqueue(stack.pop())
    }
}

let q=new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.print()
reverse(q)
q.print()
