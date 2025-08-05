class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
    }
    
    prepend(value){
        let newNode=new Node(value)
        if(!this.head){
            this.head=newNode;
            return;
        }
        newNode.next=this.head;
        this.head=newNode
    }
    
    append(value){
        let newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            return;
        }
        let curr=this.head
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode;
    }
    
    insertAtIndex(index,value){
        let newNode=new Node(value)
        if(!this.head){
            console.log("list is empty");
            return;
        }
        if(index==0){
            newNode.next=this.head;
            this.head=newNode;
            return;
        }
        let curr=this.head;
        for(let i=0;i<index-1;i++){
            curr=curr.next
            if(!curr){
                console.log("index not found");
                return;
            }
        }
        newNode.next=curr.next;
        curr.next=newNode;
    }
    
    insertAtValue(target,value){
        let newNode=new Node(value);
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let curr=this.head;
        while(curr.next && curr.next.value!==target){
            curr=curr.next;
        }
         if(!curr){
                console.log("list is empty");
                return;
            }
        newNode.next=curr.next;
        curr.next=newNode
    }
    
    removeAtIndex(index){
        if(!this.head){
            console.log("list is empty");
            return
        }
        if(index===0){
            this.head=this.head.next;
            return;
        }
        let curr=this.head;
        for(let i=0;i<index-1;i++){
             if (!curr.next) { 
               console.log("index not found");
               return;
             }
            curr=curr.next;
        }
         if (!curr.next) {
           console.log("index not found");
           return;
         }
        curr.next=curr.next.next
    }
    
    removeAtValue(target){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        if(this.head.value==target){
            this.head=this.head.next;
            return;
        }
        let curr=this.head;
        let prev=null
        while(curr && curr.value!==target){
            prev=curr;
            curr=curr.next;
        }
         if (!curr) {
          console.log("target value not found");
          return;
         }
        prev.next=curr.next;
    }
    
    findMiddle(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let slow=this.head;
        let fast=this.head;
        while(fast && fast.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        console.log(`the middle element is ${slow.value}`)
    }
    
    removeMiddle(){
       if(!this.head){
            console.log("list is empty");
            return;
        }
         if (!this.head.next) {
           this.head = null;
           console.log("Middle element removed");
           return;
         }
        let slow=this.head;
        let fast=this.head;
        let prev=null;
        while(fast && fast.next){
            prev=slow;
            slow=slow.next;
            fast=fast.next.next;
        }
        prev.next=slow.next
        console.log(` the middle Element ${slow.value} is deleted`.trim())
    }
    
    search(target){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let i=0;
        let curr=this.head;
        while(curr){
            if(curr.value==target){
               console.log(`the index of the element ${curr.value} is ${i}`)
               return i;
            }
          curr=curr.next;
          i++;
        }
        return -1;
    }

    searchWithIndex(index){
       if(!this.head){
           console.log("list is empty")
           return
       }
       if(index===0){
           console.log(`the value is ${this.head.value}`)
           return
       }
       let curr=this.head;
       for(let i=0;i<index;i++){
           curr=curr.next;
            if(!curr){
              console.log("index is not found");
              return
            }
        }
        console.log(`the value is ${curr.value}`)
    }
    
    reverse(){
        if(!this.head){
            console.log("list is empty");
            return;
        };
        let curr=this.head;
        let prev=null;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }
    
    removeDupli(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let curr=this.head;
        let dupli=new Set();
        let prev=null;
        while(curr){
            if(dupli.has(curr.value)){
                prev.next=curr.next;
            }else{
                dupli.add(curr.value);
                prev=curr;
            }
            curr=curr.next;
        }
    }

    removeDupliWithoutSet(){
        if(!this.head){
            console.log("list is empty");
            return
        }
        let curr=this.head;
        while(curr){
            let prev=curr;
            while(prev.next){
              if(prev.next.value===curr.value){
                  prev.next=prev.next.next;
              }else{
                  prev=prev.next
              }
            }
            curr=curr.next;
        }
    }
    
    findOdd(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let curr=this.head;
        let oddValue=""
        while(curr){
            if(curr.value%2!==0){
                oddValue+=` ${curr.value}`
            }
            curr=curr.next;
        }
        console.log(` the odd values are ${oddValue}`.trim())
    }
    
    removeOdd(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        while (this.head && this.head.value % 2 !== 0) {
            this.head = this.head.next;
        }
        
        let curr=this.head;
        while(curr && curr.next){
            if(curr.next.value%2!==0){
                curr.next=curr.next.next
            }else{
            curr=curr.next;
            }
        }
    }
    
    adjacentOdd(){
        if(!this.head){
            console.log("list is empty");
            return;
        } 
        let curr=this.head;
        while(curr && curr.next){
            if(curr.value %2!==0 && curr.next.value%2!==0){
                curr.next=curr.next.next;
            }else{
                curr=curr.next;
            }
        }
    }
    
    findEven(){
         if(!this.head){
            console.log("list is empty");
            return;
        } 
        let curr=this.head;
        let evenNum="";
        while(curr){
            if(curr.value%2==0){
                evenNum+=` ${curr.value}`
            }
                curr=curr.next;
        }
        console.log(`the even numbers are ${evenNum}`)
    }
    
    removeEven(){
        if(!this.head){
            console.log("list is empty");
            return;
        } 
        while(this.head && this.head.value %2==0){
            this.head=this.head.next;
        }
        let curr=this.head;
        while(curr && curr.next){
            if(curr.next.value%2==0){
                curr.next=curr.next.next;
            }else{
                curr=curr.next;
            }
        }
    }
    
    removeAdjEven(){
         if(!this.head){
            console.log("list is empty");
            return;
        } 
        let curr=this.head;
        while(curr && curr.next){
            if(curr.value%2==0 && curr.next.value%2==0){
                curr.next=curr.next.next;
            }else{
                curr=curr.next;
            }
        }
    }
    
    toArray(){
        let arr=[];
        let curr=this.head;
        while(curr){
            arr.push(curr.value)
            curr=curr.next;
        }
        console.log(arr)
    }
    
    arrToList(arr){
        this.head=null;
        for(let val of arr){
            this.append(val)
        }
    }

    toList(arr){
        this.head=null;
        for(let val of arr){
          let newNode=new Node(val);
         if(this.head==null){
             this.head=newNode
         }else{
             let curr=this.head;
             while(curr.next!==null){
                 curr=curr.next
             }
             curr.next=newNode;
         }
        }
    }
    
    sortList(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let swapped;
        do{
            swapped=false;
            let curr=this.head;
            while(curr.next){
                if(curr.value>curr.next.value){
                    let temp=curr.value;
                    curr.value=curr.next.value;
                    curr.next.value=temp;
                    swapped=true
                }
                curr=curr.next;
            }
        }while(swapped)
    }
    
    createCycle(){
         if (!this.head) {
          console.log("List is empty, cannot create cycle");
          return;
         }
        let tail=this.head;
        while(tail.next){
            tail=tail.next
        }
        tail.next=this.head;
    }
    
     detectCycle(){
         if (!this.head) {
          console.log("List is empty");
          return false;
         }
            let fast=this.head;
            let slow=this.head;
            
            while(fast && fast.next){
                slow=slow.next;
                fast=fast.next.next;
                if(slow==fast){
                    console.log("Cycle detected");
                    return true;
                }
            }
            console.log("No cycle detected");
            return false
    }
    
    print(){
        if(!this.head){
            console.log("list is empty");
            return;
        }
        let curr=this.head;
        let result=""
        while(curr){
            result+=` ${curr.value}`;
            curr=curr.next;
        }
        console.log(result.trim())
    }
}

let arr=[1,3,4,5,6,7,8,3,2,1]
let list=new LinkedList();
list.prepend(45)
list.prepend(93)
list.prepend(12)
list.prepend(345)
list.print()
list.append(891)
list.append(18)
list.append(10)
list.append(192)
list.print()
list.insertAtIndex(2,564)
list.print()
list.insertAtValue(45,655)
list.print()
list.removeAtIndex(2)
list.print()
list.removeAtValue(655)
list.print()
list.findMiddle()
list.removeMiddle()
list.print()
list.search(890)
list.searchWithIndex(3)
list.reverse()
list.print()
// list.removeDupli()
// list.print()
// list.findOdd()
// list.removeOdd()
// list.adjacentOdd()
// list.findEven()
// list.print()
// list.removeEven()
// list.removeAdjEven()
// list.toArray()
list.arrToList(arr)
list.print()
list.sortList()
list.print()
list.createCycle()
list.detectCycle()

