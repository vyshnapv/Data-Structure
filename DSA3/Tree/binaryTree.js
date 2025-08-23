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

