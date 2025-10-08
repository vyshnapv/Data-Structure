class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(newValue){
        this.root=new Node(newValue);
    }
    
    addLeft(parentNode,leftChild){
        parentNode.left=new Node(leftChild)
        return parentNode.left
    }
    
    addRight(parentNode,rightChild){
        parentNode.right=new Node(rightChild)
        return parentNode.right;
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

    levelOrderTraversal(){
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
    
    findLeaf(node=this.root,result=[]){
        if(!node){
            return
        }
        
        if(node.left===null && node.right==null){
           result.push(node.value)
        }
        
        this.findLeaf(node.left,result)
        this.findLeaf(node.right,result)
        
        return result
    }
    
    isFull(node=this.root){
        if(!node){
            return true;
        }
        if(node.left==null && node.right==null){
            return true
        }
        
        if(node.left!==null && node.right!==null){
            return this.isFull(node.left)&& this.isFull(node.right)
        }
        return false;
    }

     sumOfLeaf(node=this.root){
        if(!node){
            return 0;
        }
        if(node.left===null && node.right==null){
            return Number(node.value)
        }
       return this.sumOfLeaf(node.left)+this.sumOfLeaf(node.right)
    }
    
    sumOfLeftLeaf(node=this.root,isLeft=false){
        if(!node){
            return 0;
        }
        
        if(node.left===null && node.right===null){
            return isLeft?Number(node.value):0;
        }
        
        return this.sumOfLeftLeaf(node.left,true)+this.sumOfLeftLeaf(node.right,false)
    }
    
    SumOfRightLeaf(node=this.root,isRight=false){
        if(!node){
            return 0;
        }
        if(node.left==null && node.right==null){
            return isRight?Number(node.value):0
        }
        return this.SumOfRightLeaf(node.right,true)+this.SumOfRightLeaf(node.left,false)
    }
    
   isIdentical(root1,root2){
       if(!root1&&!root2){
           return true;
       }
       
       if(!root1||!root2){
           return false
       }
       
       if(root1.value!==root2.value){
           return false
       }
       
       return this.isIdentical(root1.left,root2.left)&&this.isIdentical(root1.right,root2.right)
   }
   
  isSubTree(mainRoot,subRoot){
      if(!subRoot){
          return true;
      }
      
      if(!mainRoot){
          return false
      }
      
      if(this.isIdentical(mainRoot,subRoot)){
          return true
      }
      
      return this.isSubTree(mainRoot.left,subRoot)||this.isSubTree(mainRoot.Right,subRoot)
  }
}

const tree=new BinaryTree(56)
const B=tree.addLeft(tree.root,34)
const C=tree.addRight(tree.root,90)

const node87=tree.addLeft(B,87)
const node24=tree.addRight(B,24)

tree.addLeft(node24,44)


//identical
// const tree1 = new BinaryTree(1)
// const tree2 = new BinaryTree(1)

// tree1.addLeft(tree1.root, 2)
// tree1.addRight(tree1.root, 3)

// tree2.addLeft(tree2.root, 2)
// tree2.addRight(tree2.root, 3)
//

//subtree
// const tree = new BinaryTree("A");
// const B = tree.addLeft(tree.root, "B");
// const C = tree.addRight(tree.root, "C");
// tree.addLeft(B, "D");
// tree.addRight(B, "E");

// const subTree = new BinaryTree("B");
// subTree.addLeft(subTree.root, "D");
// subTree.addRight(subTree.root, "E");
//

console.log(tree)
console.log(tree.findLeaf())
console.log(tree.isFull())

console.log(tree.sumOfLeftLeaf())
console.log(tree.SumOfRightLeaf())
console.log(tree.sumOfLeaf())

tree.preOrder(tree.root)
tree.inOrder(tree.root)
tree.postOrder(tree.root)
tree.levelOrderTraversal()

// console.log(tree1.isIdentical(tree1.root,tree2.root))
// console.log(tree.isSubTree(tree.root, subTree.root));