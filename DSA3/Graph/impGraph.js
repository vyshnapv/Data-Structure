class Graph{
    constructor(){
        this.adjacencyList={}
    }
    
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex]=new Set()
        }
    }
    
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    
    hasEdge(vertex1,vertex2){
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1) 
            )      
    }
    
    removeEdge(vertex1,vertex2){
       this.adjacencyList[vertex1].delete(vertex2)
       this.adjacencyList[vertex2].delete(vertex1)
    }
    
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
    }
    
    getVertexCount(){
        return Object.keys(this.adjacencyList).length
    }
    
    getEdgeCount(){
        let count=0;
        for(let vertex in this.adjacencyList){
            count+=this.adjacencyList[vertex].size
        }
        return count/2
    }
    
    getVertices(){
        return Object.keys(this.adjacencyList)
    }
    
    getNeighbors(vertex){
        if(!this.adjacencyList[vertex]){
            return null;
        }
        return [...this.adjacencyList[vertex]]
    }
    
    findShortestPath(start,end){
        if(!this.adjacencyList[start] || !this.adjacencyList[end]){
            return null;
        }
        const queue=[[start]];
        const visited=new Set();
        visited.add(start);
        
        while(queue.length>0){
            const path=queue.shift();
            const vertex=path[path.length-1];
            
            if(vertex===end){
                return path;
            }
            
            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push([...path,neighbor])
                }
            }
        }
        return null;
    }
    
    dfs(start,visited =new Set(),result=[]){
        if(!start){
            return 
        }
        console.log(start)
        visited.add(start)
        
        for(let neighbor of this.adjacencyList[start]){
            if(!visited.has(neighbor)){
                this.dfs(neighbor,visited,result)
            }
        }
    }
    
    bfs(start){
        let visited=new Set()
        let queue=[start];
        visited.add(start)
        
        while(queue.length>0){
            let vertex=queue.shift()
            console.log(vertex);
            
            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }
    
    isConnected(){
        const vertices=this.getVertices();
        if(vertices.length===0){
            return true;
        }
        const visited=new Set();
        this.dfs(vertices[0],visited);
        
        return visited.size===vertices.length;
    }
    
    calculateDegree(vertex){
        if(!this.adjacencyList[vertex]){
            return null;
        }
        return this.adjacencyList[vertex].size
    }
    
    hasCycle(){
        const visited=new Set();
        const dfsCycle=(vertex,parent)=>{
            visited.add(vertex);
            
            for(let neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                   if(dfsCycle(neighbor,vertex)){
                        return  true
                   }
                }else if(neighbor!==parent){
                        return true;
                }
            }
            return false;
        }
            
            for(let vertex in this.adjacencyList){
                if(!visited.has(vertex)){
                    if(dfsCycle(vertex,null)){
                        return true;
                    }
                }
            }
            return false
    }
    
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex + "->"+[...this.adjacencyList[vertex]])
        }
    }
}

const graph=new Graph();
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("D", "E");


graph.display()
console.log(graph.hasEdge("B","C"))

// graph.removeEdge("A","B")
// graph.display()

// graph.removeVertex("B")
// graph.display()

console.log(graph.getVertexCount())
console.log(graph.getEdgeCount())
console.log(graph.getVertices())
console.log(graph.getNeighbors("A"))

console.log(graph.findShortestPath("A", "E"));
//shortest distance(Once you have the path, shortest distance = path.length - 1)
const path = graph.findShortestPath("A", "E");
const distance=path?path.length-1:Infinity;
console.log("Shortest Distance:", distance);

// graph.dfs("A")
// graph.bfs("A")

console.log(graph.isConnected())
console.log(graph.calculateDegree("A"))
console.log("Has Cycle:", graph.hasCycle());   
