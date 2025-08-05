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
            console.log("queue is empty")
            return
        }
        return this.queue[0]
    }
    
    isEmpty(){
        return this.queue.length===0
    }
    
    size(){
        return this.queue.length;
    }
    
    print(){
        console.log(this.queue)
    }
}

let que=new Queue();
que.enqueue(67)
que.enqueue(89)
que.enqueue(12)
que.print()
que.dequeue()
que.print()