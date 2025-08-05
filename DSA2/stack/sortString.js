//sort a string using stack
class Stack{
    constructor(){
        this.stack=[]
    }
    
    push(value){
        this.stack.push(value)
    }
    
    pop() {
        if (this.isEmpty()) return null;
        return this.stack.pop();
    }
     peek() {
        if (this.isEmpty()) return null;
        return this.stack[this.stack.length - 1];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    size() {
        return this.stack.length;
    }
}

function sortString(str){
    let mainStack=new Stack();
    let tempStack=new Stack()
    
    for(let val of str){
        mainStack.push(val)
    }
    
    while(!mainStack.isEmpty()){
        let temp=mainStack.pop();
        
        while(!tempStack.isEmpty() && tempStack.peek()<temp){
            mainStack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }
    let sorted=""
    while(!tempStack.isEmpty()){
        sorted=tempStack.pop()+sorted
    }
    return sorted;
}

let input="gusjdhsj";
let sortedStr=sortString(input)
console.log(input);
console.log(sortedStr)

