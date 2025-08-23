class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(value){
        this.stack.push(value)
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

function reverse(arr){
    let stack=new Stack();
    for(let num of arr){
        stack.push(num)
    }
    
    let reversed=[]
    while(!stack.isEmpty()){
        reversed.push(stack.pop())
    }
    return reversed;
}

let sk=new Stack();
sk.push(56)
sk.push(23)
sk.push(13)
sk.push(90)
console.log(reverse(sk.stack))