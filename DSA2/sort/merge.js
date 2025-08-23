//merge sort
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    const mid=Math.floor(arr.length/2);
    const leftArray=arr.slice(0,mid);
    const rightArray=arr.slice(mid);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray,rightArray){
    const sortedArray=[];
    while(leftArray.length && rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortedArray.push(leftArray.shift());
        }else{ 
            sortedArray.push(rightArray.shift());
        }
    }
   return [...sortedArray,...leftArray,...rightArray]
}


const arr=[1,23,-3,40,-78,36,9]
console.log(mergeSort(arr))

//sort a string using merge sort
function mergeSort(str){
    if(str.length<2){
        return str;
    }
    const mid=Math.floor(str.length/2);
    const left=str.slice(0,mid);
    const right=str.slice(mid);
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let result="";
    let i=0,j=0
    
    while(i<left.length && j<right.length){
       if(left[i]<=right[j]){
           result+=left[i];
           i++
       }else{
           result+=right[j]
           j++;
       }
    }
    
    result+=left.slice(i);
    result+=right.slice(j)
    
    return result
}

const str = "mergeSortString";
const sortedStr = mergeSort(str);
console.log(sortedStr);

//merge 2 sorted array
function merge(arr1,arr2){
   let sorted=[];
   while(arr1.length && arr2.length){
       if(arr1[0]<=arr2[0]){
           sorted.push(arr1.shift())
       }else{
            sorted.push(arr2.shift())
       }
   }
   return [...sorted,...arr1,...arr2]
}

let arr1=[1,3,5,7]
let arr2=[2,4,6,8]
console.log(merge(arr1,arr2))

//sort array of object based on amount property
function sorting(obj){
    if(obj.length<2){
        return obj;
    }
    let mid=Math.floor(obj.length/2);
    let left=obj.slice(0,mid)
    let right=obj.slice(mid)
    
    return merge(sorting(left),sorting(right))
}

function merge(left,right){
    let sortedArray=[];
    while(left.length && right.length){
        if(left[0].amount<right[0].amount){
            sortedArray.push(left.shift())
        }else{
             sortedArray.push(right.shift())
        }
    }
    return [...sortedArray,...left,...right]
}

const items = [
  { name: 'Apple', amount: 50 },
  { name: 'Banana', amount: 20 },
  { name: 'Cherry', amount: 30 }
];
const sortedItems = sorting(items);
console.log(sortedItems);

//sort array of string using merge sort
function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    
    return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
    let sorted=[];
    while(left.length && right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

const fruits = ["Banana", "Apple", "Mango", "Cherry", "Date"];
console.log(mergeSort(fruits))


//merge sort on a linked list
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
        let newNode=new Node(value)
        if(!this.head){
            this.head=newNode;;
            return
        }
        let curr=this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next=newNode
    }
    
    mergeSort(head){
        if(!head || !head.next){
            return head;
        }
        const middle=this.middle(head);
        const nextToMiddle=middle.next;
        middle.next=null
        
        const left=this.mergeSort(head)
        const right=this.mergeSort(nextToMiddle)
        
        return this.merge(left,right)
    }
    
    merge(l1,l2){
        let dummy=new Node(0);
        let curr=dummy;
        
        while(l1 && l2){
            if(l1.value<l2.value){
                curr.next=l1;
                l1=l1.next
            }else{
                curr.next=l2;
                l2=l2.next;
            }
            curr=curr.next
        }
        curr.next=l1||l2;
        return dummy.next
    }
    
    sort(){
        this.head=this.mergeSort(this.head)
    }
    
    middle(head){
        if(!this.head){
            console.log("list is empty")
            return;
        }
        let slow=head;
        let fast=head;
        while(fast.next && fast.next.next){
            slow=slow.next;
            fast=fast.next.next;
        }
        return slow
    }
   
    print(){
        if(!this.head){
            return "list is empty"
        }
        let curr=this.head;
        let result=""
        while(curr){
            result+=`${curr.value} `
            curr=curr.next
        }
        console.log(result)
    }
}

let list1=new LinkedList();
list1.prepend(77)
list1.prepend(3)
list1.prepend(7)
list1.append(12)
list1.append(9)
list1.append(11)
list1.print()
list1.sort()
list1.print()

//merge two sorted linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
    }

      mergeSortedLists(head1, head2) {
        const dummy = new Node(0);
        let tail = dummy;

        while (head1 && head2) {
            if (head1.value < head2.value) {
                tail.next = head1;
                head1 = head1.next;
            } else {
                tail.next = head2;
                head2 = head2.next;
            }
            tail = tail.next;
        }

        tail.next = head1 || head2;

        return dummy.next;
    }

    print() {
        let curr = this.head;
        let result = "";
        while (curr) {
            result += curr.value + " ";
            curr = curr.next;
        }
        console.log(result.trim());
    }
}

const list1 = new LinkedList();
list1.append(1);
list1.append(4);
list1.append(7);

const list2 = new LinkedList();
list2.append(2);
list2.append(3);
list2.append(8);

const mergedList = new LinkedList();
mergedList.head = mergedList.mergeSortedLists(list1.head, list2.head);
mergedList.print();



