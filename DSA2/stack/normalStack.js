//stack using array
class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(value){
        this.stack.push(value)
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack underflow")
            return;
        }
        return this.stack.pop()
    }
    
    peek(){
         if(this.isEmpty()){
            console.log("stack is empty")
            return;
        }
        return this.stack[this.stack.length-1]
    }
    
    isEmpty(){
        return this.stack.length===0
    }
    
    size(){
       return this.stack.length
    }
    
    print(){
        console.log(this.stack)
    }
}

const sk=new Stack();
sk.push(67)
sk.push(89)
sk.push(45)
sk.push(14)
sk.print()
sk.pop()
sk.print()
console.log(sk.peek())
console.log(sk.isEmpty())
console.log(sk.size())

