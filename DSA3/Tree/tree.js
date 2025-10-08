//Basic Tree Node Implementation in JavaScript
class Node{
    constructor(value){
        this.value=value;
        this.children=[]
    }
}

class Tree{
    constructor(value){
        this.root=new Node(value)
    }
    
    addChild(parentNode,childValue){
        const childNode=new Node(childValue);
        parentNode.children.push(childNode)
        return childNode
    }
    
    traverse(node=this.root){
        console.log(node.value)
        for(let child of node.children){
            this.traverse(child)
        }
    }
}

let tree=new Tree("A")
let b=tree.addChild(tree.root,"B")
let c=tree.addChild(tree.root,"C")
let d=tree.addChild(tree.root,"D")

tree.addChild(b,"E")
tree.addChild(b,"F")

tree.addChild(c,"G")

console.log(tree.root)
tree.traverse()
