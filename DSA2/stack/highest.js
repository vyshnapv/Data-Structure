//To implement a stack with push(), pop(), and getMax() operations in O(1) time complexity, 
class Stack{
    constructor(){
        this.stack=[];
        this.max=[];
    }
    push(value){
        this.stack.push(value);
        if(this.max.length===0 || value>=this.getMax()){
            this.max.push(value)
        }else{
            this.max.push(this.getMax())
        }
    }
    
    pop(){
        if(this.stack.length==0){
            console.log("stack underflow")
            return null;
        }
        this.max.pop();
        return this.stack.pop()
    }
    
    getMax(){
        if(this.max.length===0){
            return null;
        }
        return this.max[this.max.length-1]
    }
    
    print(){
        console.log(`main: ${this.stack}`)
        console.log(`main: ${this.max}`)
    }
}

let s=new Stack();
s.push(64)
s.push(38)
s.push(12)
s.push(78)
s.print()
s.pop()
s.print()
