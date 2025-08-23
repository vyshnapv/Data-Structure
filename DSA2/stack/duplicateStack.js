class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(value){
     if(!this.stack.includes(value)){
         this.stack.push(value)
     }else{
         console.log(`Duplicate value ${value} is rejected`)
     }
    }
    
    pop(){
        if(this.isEmpty()){
            return "stack underflow"
        }
        return this.stack.pop()
    }
    
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.stack[this.stack.length-1]
    }
    
    isEmpty(){
        return this.stack.length===0
    }
    
    print(){
        console.log(this.stack)
    }
}

let sk=new Stack();
sk.push(76)
sk.push(12)
sk.push(37)
sk.push(12)
sk.print()
