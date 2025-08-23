//stack using 2 queue
class StackUsingQueue{
    constructor(){
        this.q1=[];
        this.q2=[];
    }
    
    push(value){
        this.q2.push(value);
        
        while(this.q1.length>0){
            this.q2.push(this.q1.shift())
        }
        
        let temp=this.q1;
        this.q1=this.q2;
        this.q2=temp;
    }
    
    pop(){
         if(this.isEmpty()){
            return null;
         }
        return this.q1.shift()
     }
    
    top(){
         if(this.isEmpty()){
            return null;
         }
        return this.q1[0]
     }
     
    isEmpty(){
        return this.q1.length===0
    }
    
    print(){
        console.log(this.q1)
    }
}

const stack=new StackUsingQueue();


stack.push(10);
stack.push(20);
stack.push(30);
stack.print();       

console.log(stack.pop())
stack.print();       

console.log(stack.top())