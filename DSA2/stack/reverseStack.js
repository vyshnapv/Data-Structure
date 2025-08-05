//reverse a stack
class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(value){
        this.stack.push(value)
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack underflow");
            return;
        }
        return this.stack.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return;
        }
        return this.stack[this.stack.length-1]
    }
    
    size(){
        return this.stack.length
    }
    
    isEmpty(){
        return this.stack.length===0
    }
    
   reverse(){
       if(this.isEmpty()){
         console.log("stack is empty")
         return;
       }
     
       let temp=[];
       while(!this.isEmpty()){
         temp.push(this.pop())
       }
     
       for(let val of temp){
         this.push(val)
       }
    }
   
    print(){
        console.log(this.stack)
    }
}

let s=new Stack();
s.push(64)
s.push(38)
s.push(7)
s.push(12)
s.push(78)
s.print()
s.reverse()
s.print()

