//queue using stack
class QueueUsing{
    constructor(){
        this.stack1=[];
        this.stack2=[];
    }
    
    enqueue(value){
        this.stack1.push(value);
    }
    
    dequeue(){
        if(this.isEmpty()){
            console.log("stack underflow")
            return
        }
        
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        console.log(this.stack2.pop())
    }
    
    peek(){
         if(this.isEmpty()){
            console.log("queue is empty")
            return
        }
        if(this.stack2.length===0){
            while(this.stack1.length>0){
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2[this.stack2.length - 1]
    }
    
     isEmpty() {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
    
   print() {
    console.log("stack1:", this.stack1);
    }
}

let q=new QueueUsing();
q.enqueue(78)
q.enqueue(67)
q.enqueue(12)
q.enqueue(89)
q.print()
q.dequeue()
console.log(q.peek())