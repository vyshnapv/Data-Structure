//check palindrome using stack
class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(char){
        this.stack.push(char)
    }
    
    pop(){
        if(this.isEmpty()){
            return `stack underflow`
        }
        return this.stack.pop()
    }
    
    isEmpty(){
        return this.stack.length===0
    }
}

function palindrome(str){
    let stack=new Stack()
    for(let char of str){
        stack.push(char)
    }
    
    let reversed=""
    while(!stack.isEmpty()){
        reversed+=stack.pop()
    }
    return str===reversed
}

let str="madams";
console.log(palindrome(str))
