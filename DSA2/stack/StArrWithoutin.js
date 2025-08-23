//stack using array without using inbuilt
class Stack{
    constructor(){
        this.stack=[]
        this.top=-1;
    }
    
    push(value){
        this.top++
        this.stack[this.top]=value;
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack underflow");
            return;
        }
        let removed=this.stack[this.top];
        this.top--;
        return removed
    }
    
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.top]
    }
    
    isEmpty(){
        return this.top===-1
    }
    
    print(){
        console.log(this.stack)
    }
    
     print(){
       console.log(this.stack)
    }
}

let sk=new Stack()
sk.push(56)
sk.push(89)
sk.push(12)
sk.print()
console.log(sk.pop())
console.log(sk.peek())
sk.push(17)
sk.print()
