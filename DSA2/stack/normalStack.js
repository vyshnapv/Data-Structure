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
            return "stack is empty"
        }
        return this.stack.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.size()-1]
    }
    
    isEmpty(){
        return this.stack.length===0
    }
    
    size(){
        return this.stack.length;
    }
    
    print(){
        console.log(this.stack)
    }
}

let stack=new Stack();
stack.push(56)
stack.push(36)
stack.push(91)
stack.push(67)
stack.print()
stack.pop()
stack.print()
console.log(stack.peek())
