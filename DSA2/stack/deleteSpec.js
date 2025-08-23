//delete specific element from stack
class Stack{
    constructor(){
        this.stack=[];
    }
    
   push(value){
       this.stack.push(value);
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
    
  deleteSpec(target){
      let tempStack=[];
      while(!this.isEmpty()){
          let top=this.pop();
          if(top===target){
              break;
          }else{
              tempStack.push(top)
          }
      }
      
      while(tempStack.length>0){
          this.push(tempStack.pop())
      }
      return `the removed element is ${target}`
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
sk.print()
console.log(sk.deleteSpec(12));
sk.print()






