//stack with reverse property ,when reverse is true pop from the other end
class Stack{
    constructor(){
       this.stack=[];
       this.reverse=false;
    }
    
    setReverse(value){
        this.reverse=value
    }
   
   push(value){
       this.stack.push(value)
   }
   
   pop(){
       if(this.isEmpty()){
           return `stack underflow`
       }
       return this.reverse?this.stack.shift():this.stack.pop();
   }
   
   peek(){
       if(this.isEmpty()){
           return `stack is empty`
       }
       return this.reverse?this.stack[0]:this.stack[this.stack.length-1]
   }
   
   isEmpty(){
       return this.stack.length===0;
   }
   
   size(){
       return this.stack.length;
   }
   
   print(){
       console.log(this.stack)
   }
}

let sk=new Stack();
sk.push(67)
sk.push(22)
sk.push(96)
sk.push(19)
sk.print()
console.log(sk.pop())
console.log(sk.peek())
sk.print()
sk.setReverse(true)
console.log(sk.pop())
console.log(sk.peek())


