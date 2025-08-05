//sort a stack using temp stack
class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(value){
        this.stack.push(value);
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack underflow");
            return;
        }
        return this.stack.pop()
    }
    
    peek(){
        return this.stack[this.stack.length-1]
    }
    
    isEmpty(){
        return this.stack.length===0
    }
    
    print(){
        console.log(this.stack)
    }
}

function Sorting(stack){
    let tempStack=new Stack();
    
    while(!stack.isEmpty()){
        let temp=stack.pop();
        
        while(!tempStack.isEmpty() && tempStack.peek()<temp){
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    while(!tempStack.isEmpty()){
        stack.push(tempStack.pop())
    }
}

let s = new Stack();
s.push(3);
s.push(1);
s.push(4);
s.push(2);
s.print()
Sorting(s);
s.print()
