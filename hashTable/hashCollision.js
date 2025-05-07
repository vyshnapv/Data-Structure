class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }
    
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size;
    }
    
    set(key,value){
        const index=this.hash(key);
        const bucket=this.table[index];
        if(bucket){
            let sameKeyItem=bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }else{
            this.table[index]=[[key,value]];
        }
    }
    
    get(key){
        const index=this.hash(key);
        let bucket=this.table[index];
        if(bucket){
            let sameKeyItem=bucket.find(item=>item[0]===key);
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined;
    }
    
   remove(key){
    const index = this.hash(key);
    let bucket=this.table[index]
    if(bucket){
        let sameKeyItem=bucket.find(item=>item[0]===key);
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem),1)
        }
    }
   }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const table=new HashTable(50);
table.set("name", "vyshna") // add
table.set("age", "24")      // add
table.display()             // shows both

console.log(table.get("name")) // "vyshna"
table.remove("name")          // remove

table.set("mane", "clark")    // add
table.set("name", "Diana")    // re-add with different value
table.remove("name")
table.display()               // shows updated table
