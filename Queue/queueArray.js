class Queue{
    constructor(){
        this.items=[];
    }
    
    enqueue(value){
        this.items.push(value)
    }
    
    dequeue(){
        if(this.isEmpty()){
            return "underflow"
        }
       return this.items.shift()
    }
    
    isEmpty(){
        return this.size===0;
    }
    
    peek(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items[0];
    }
    
    size(){
        return this.items.length;
    }
    
    print(){
      console.log(this.items)
    }
    
}

const myQueue=new Queue();
myQueue.enqueue(89)
myQueue.enqueue(78)
myQueue.enqueue(23)
myQueue.print()
myQueue.dequeue()
myQueue.print()
console.log(myQueue.peek())
