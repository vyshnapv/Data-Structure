class BinaryTree{
    constructor(value){
        this.value=value;
        this.left=null
        this.right=null
    }
}

function preorder(node){
    if(node==null){
        return;
    }
    console.log(node.value)
    preorder(node.left)
    preorder(node.right)
}

function Inorder(node){
    if(node==null){
        return 
    }
    Inorder(node.left)
    console.log(node.value)
    Inorder(node.right)
}

function postOrder(node){
    if(node==null){
        return 
    }
    postOrder(node.left)
    postOrder(node.right)
    console.log(node.value)
}

let root=new BinaryTree(10)
root.left=new BinaryTree(5)
root.right=new BinaryTree(15)

root.left.left=new BinaryTree(3)
root.left.right=new BinaryTree(7)

root.right.left=new BinaryTree(12)
root.right.right=new BinaryTree(17)
console.log(root)

preorder(root)
Inorder(root)
postOrder(root)

//another way
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(newValue){
        this.root=new Node(newValue)
    }
    
    addLeft(parentNode,leftNode){
        parentNode.left=new Node(leftNode);
        return parentNode.left;
    }
    
    addRight(parentNode,rightNode){
        parentNode.right=new Node(rightNode);
        return parentNode.right;
    }
    
    findLeaf(node=this.root,result=[]){
        if(!node){
            return
        }
        if(node.left==null && node.right==null){
            result.push(node.value)
        }
        
        this.findLeaf(node.left,result)
        this.findLeaf(node.right,result)
        
        return result
    }
    
    isFull(node=this.root){
        if(!node){
            return true
        }
        if(node.left==null && node.right==null){
            return true
        }
        
        if(node.left!==null && node.right!==null){
            return this.isFull(node.left)&&this.isFull(node.right)
        }
        return false
    }
}

const tree=new BinaryTree("A")

const B=tree.addLeft(tree.root,"B")
const C=tree.addRight(tree.root,"C")

tree.addLeft(B, "D");
tree.addRight(B, "E");

console.log(tree)
console.log(tree.findLeaf())
console.log(tree.isFull())