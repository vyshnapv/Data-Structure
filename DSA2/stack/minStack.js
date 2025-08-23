//find the minimum element in this stack
class Stack{
    constructor(){
        this.stack=[];
        this.min=[]
    }
    
   push(value){
       this.stack.push(value);
       if(this.min.length===0 || value<=this.getmin()){
           this.min.push(value)
       }else{
           this.min.push(this.getmin())
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
    
    getmin(){
        if(this.min.length===0){
            return null;
        }
        return this.min[this.min.length-1]
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
sk.push(92)
console.log(sk.getmin())
sk.print()