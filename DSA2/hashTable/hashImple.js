class HashTable{
    constructor(size=100){
        this.table=new Array(size);
        this.size=size;
    }
    
    hash(key){
        let hash=0;
        for(let char of key){
            hash+=char.charCodeAt(0)
        }
        return hash%this.size;
    }
    
    set(key,value){
        const index=this.hash(key)
        this.table[index]=value
    }
    
    get(key){
        const index=this.hash(key)
        return this.table[index]
    }
    
    remove(key){
        const index=this.hash(key);
        this.table[key]=undefined;
    }
    
    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const ht=new HashTable();
ht.set("name","vyshna");
ht.set("age",24)
console.log(ht.get("name"))
