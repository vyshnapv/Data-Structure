//delete specific element froom stack
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
    
    isEmpty(){
        return this.stack.length===0
    }
    
    deleteSpec(target){
        const tempStack=[];
        while(!this.isEmpty()){
            let top=this.pop();
            if(top===target){
                break
            }else{
                tempStack.push(top)
            }
        }
        while(tempStack.length>0){
            this.push(tempStack.pop())
        }
        console.log(`the removed element is ${target}`)
    }
    
    print(){
        console.log(this.stack)
    }
}

let s=new Stack();
s.push(64)
s.push(38)
s.push(12)
s.push(78)
s.deleteSpec(38)
s.print()

