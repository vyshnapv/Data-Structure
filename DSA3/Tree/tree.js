//Basic Tree Node Implementation in JavaScript
class BasicTree{
    constructor(value){
        this.value=value;
        this.children=[]
    }
    
    add(node){
        this.children.push(node)
    }
}

let root=new BasicTree("A");
const b=new BasicTree("B")
const c=new BasicTree("C")
const d=new BasicTree("D")

root.add(b)
root.add(c)
root.add(d)

b.add(new BasicTree("E"))
b.add(new BasicTree("F"))
d.add(new BasicTree("G"))
d.add(new BasicTree("H"))

console.log(root)
console.log(b.children)

//sum of left leaf node in a binary tree
class BinaryTree{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function sumOfLeftLeaf(root){
    if(!root){
        return 0;
    }
    let sum=0;
    if(root.left && !root.left.left && !root.left.right){
        sum+=root.left.value;
    }
    
    sum+=sumOfLeftLeaf(root.left)
    sum+=sumOfLeftLeaf(root.right)
    
    return sum
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(sumOfLeftLeaf(root))

//sum of leaf nodes
class BinaryTree{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function sumOfLeaf(root){
    if(!root){
        return 0;
    }
    if(!root.left && !root.right){
        return root.value
    }
    
    return sumOfLeaf(root.left)+sumOfLeaf(root.right)
}

let root = new BinaryTree(1);
root.left = new BinaryTree(2);
root.right = new BinaryTree(3);
root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(5);
root.right.left = new BinaryTree(6);
root.right.right = new BinaryTree(7);

console.log(sumOfLeaf(root))
