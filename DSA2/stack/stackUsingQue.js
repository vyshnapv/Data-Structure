//implementb stack using queue 
class StackUsingQue{
    constructor(){
        this.q1=[];
        this.q2=[];
    }
    
    push(value){
        this.q1.push(value)
    }
    
    pop(){
        if(this.isEmpty()){
            return "stack underflow"
        }
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        
        let popped=this.q1.shift();
        
        let temp=this.q1;
        this.q1=this.q2;
        this.q2=temp;
        
        return popped;
    }
    
    peek(){
        if(this.isEmpty()){
           return "stack is empty"
        }
        while(this.q1.length>1){
            this.q2.push(this.q1.shift())
        }
        
        let top=this.q1.shift();
        this.q2.push(top)
        
        let temp=this.q1;
        this.q1=this.q2;
        this.q2=temp;
        
        return top;
    }
    
   isEmpty() {
        return this.q1.length === 0;
    }
    
    print(){
        console.log([...this.q1].reverse())
    }
}

let sq=new StackUsingQue();
sq.push(67);
sq.push(20);
sq.push(10)
sq.print()
console.log(sq.pop())
console.log(sq.peek())

