class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    
    insert(value){
        let newNode=new Node(value)
        if(this.isEmpty()){
            this.root=newNode;
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left===null){
                root.left=newNode;
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right===null){
                root.right=newNode;
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
    
    search(root,value){
        if(!root){
            return false;
        }else{
           if(root.value===value){
               return true;
           }else if(value<root.value){
               return this.search(root.left,value)
           }else{
               return this.search(root.right,value)
           }
        }
    }
    
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    
    levelOrder(){
        let queue=[];
        queue.push(this.root)
        while(queue.length){
            let curr=queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    
    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }
    
    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }
    
   delete(value){
       this.root=this.deleteNode(this.root,value)
   }
   
   deleteNode(root,value){
       if(root===null){
           return null;
       }
       
       if(value<root.value){
           root.left=this.deleteNode(root.left,value)
       }else if(value>root.value){
           root.right=this.deleteNode(root.right,value)
       }else{
           if(!root.left && !root.right){
               return null
           }
           if(!root.left){
               return root.right
           }else if(!root.right){
               return root.left
           }
           
           root.value=this.min(root.right)
           root.right=this.deleteNode(root.right,root.value)
       }
       return root
   }
   
   isBst(root,min=-Infinity,max=Infinity){
       if(root==null){
           return true;
       }
       if(root.value<=min || root.value>=max){
           return false
       }
       return(
           this.isBst(root.left,min,root.value)&&
           this.isBst(root.right,root.value,max)
           )
   }
   
   findHeight(root){
        if(!root){
            return -1
        }
        let left=this.findHeight(root.left)
        let right=this.findHeight(root.right)
        
        return Math.max(left,right)+1
    }
    
     findClosest(root,target) {
        if (!root){
           return null;
        }
        let closest = root.value;
        let current = root;
        while(current) {
            if (Math.abs(current.value - target) < Math.abs(closest - target)) {
                closest = current.value;
            }
            if (target < current.value) {
                current=current.left;
            } else if (target > current.value) {
                current=current.right
            }else{
                return current.value
            }
        }
        return closest;
    }
    
    findDegree(nodeValue){
        const node=this.findNode(this.root,nodeValue);
        if(node){
          const degree=(node.left?1:0)+(node.right?1:0)
          return degree;
        }
        return null
    }
    
    
    findNode(root,value){
        if(!root){
            return null
        }else{
            if(root.value===value){
                return root;
            }else if(value<root.value){
                return this.findNode(root.left,value)
            }else{
                return this.findNode(root.right,value)
            }
        }
    }

       findDepth(root,value,depth=0){
       if(!root){
           return -1
       }
       if(root.value==value){
           return depth
       }else if(value<root.value){
           return this.findDepth(root.left,value,depth+1)
       }else{
           return this.findDepth(root.right,value,depth+1)
       }
   }
    
    countLeaf(root){
        if(!root){
            return 0;
        }
        if(!root.left && !root.right){
            return 1
        }
        return this.countLeaf(root.left)+this.countLeaf(root.right)
    }
    
    countSingleChild(root){
        if(!root){
            return 0
        }

        //let count=0
        
        if((root.left && !root.right) || (!root.left && root.right)){
            return 1+this.countSingleChild(root.left)+this.countSingleChild(root.right)
            //count=1
        }
        return this.countSingleChild(root.left)+this.countSingleChild(root.right)
    }
    
     
   findKthSmallest(k){
    const result=[];
    function inOrder(node){
        if(!node){
            return
        }
        inOrder(node.left)
        result.push(node.value)
        inOrder(node.right)
    }
    inOrder(this.root)
    return result[k-1]
   }
   
   secondLargest(root,res=[]){
       if(root){
           this.secondLargest(root.left,res)
           res.push(root.value)
           this.secondLargest(root.right,res)
       }
       return res.length<2?null:res[res.length-2]
   }
   
 
  isPerfect(root,dept){
      if(!root){
          return true
      }
      if(!root.left && !root.right){
          return dept===1
      }
      
      if(!root.left || !root.right){
          return false
      }
      
      return this.isPerfect(root.left,dept-1) && this.isPerfect(root.right,dept-1)
  }
  
  isBalanced(root){
      if(!root){
          return true;
      }
      const leftHeight=this.findHeight(root.left)
      const rightHeight=this.findHeight(root.right)
      
      if(Math.abs(leftHeight-rightHeight)>1){
          return false
      }
      return this.isBalanced(root.left)&& this.isBalanced(root.right)
  }

    isEmpty(){
        return this.root===null
    }
}

const bst=new BinarySearchTree()
console.log("tree is empty?",bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
bst.insert(13)
bst.insert(17)

// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,20))

// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))
// bst.delete(10)
// bst.levelOrder()

// console.log(bst.isBst(bst.root))
//bst.root.left=new Node(80)if we want to make isbst false then we do this

// console.log(bst.findHeight(bst.root))

// console.log(bst.findClosest(12)); 
// console.log(bst.findClosest(17)); 
// console.log(bst.findClosest(6));

// console.log(bst.findDegree(5))
// console.log(bst.findDegree(15))

// console.log(bst.findDepth(bst.root,67))

// console.log(bst.countLeaf(bst.root))

// console.log(bst.countSingleChild(bst.root))

// console.log(bst.findKthSmallest(1))
// console.log(bst.secondLargest(bst.root))
// console.log(bst.isPerfect(bst.root))

// const depth = bst.findDept(bst.root);
// console.log(bst.isPerfect(bst.root,depth)); 

console.log(bst.isBalanced(bst.root))
