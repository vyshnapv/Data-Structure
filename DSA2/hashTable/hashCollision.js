class HashTable{
    constructor(size=100){
        this.table=new Array(size)
        this.size=size;
    }
    
    hash(key){
        let hash=0;
        for(let char of key){
            hash+=char.charCodeAt(0);
        }
        return hash%this.size;
    }
    
    set(key,value){
        const index=this.hash(key)
        if(!this.table[index]){
            this.table[index]=[]
        }
        for(let item of this.table[index]){
            if(item[0]===key){
                item[1]=value;
                return;
            }
        }
        this.table[index].push([key,value]);
    }
    
    get(key){
        const index=this.hash(key);
        const bucket=this.table[index]
        if(bucket){
            for(let item of bucket){
                if(item[0]===key){
                    return item[1]
                }
            }
        }
        return undefined;
    }
    
    remove(key){
        const index=this.hash(key)
        const bucket=this.table[index];
        if(bucket){
            this.table[index]=bucket.filter((item)=>item[0]!==key)
        }
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
ht.set("cat","animal");
ht.set("act","verb");
ht.set("tac","reverse")

ht.get("cat")
ht.display()


