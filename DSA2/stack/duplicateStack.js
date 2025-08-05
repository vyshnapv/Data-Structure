//remove duplicate values
class Stack{
    constructor(){
        this.stack=[];
    }
    
    push(value){
        if(!this.stack.includes(value)){
            this.stack.push(value)
        }else{
            console.log(`Duplicate value ${value} rejected`)
        }
    }
    
    print() {
        console.log(this.stack.join(" -> "));
    }
}

const s = new Stack();
s.push(10);
s.push(20);
s.push(10);
s.push(30);
s.print(); 
