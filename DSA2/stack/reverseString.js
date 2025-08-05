//reverse a string using stack
class Stack{
    constructor(){
        this.stack=[]
    }
    
    push(char){
        this.stack.push(char)
    }
    
    pop(){
        if(this.isEmpty()){
            console.log("stack underflow")
            return;
        }
       return this.stack.pop()
    }
    
    isEmpty(){
        return this.stack.length===0
    }
 } 

    function reverse(str){
        const stack=new Stack();
        
        for(let char of str){
            stack.push(char)
        }
        
        let reversed="";
        while(!stack.isEmpty()){
            reversed+=stack.pop()
        }
        return reversed;
    }

const input="hello world";
console.log(input)
console.log(reverse(input))