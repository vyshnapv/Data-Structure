class TrieNode{
    constructor(){
        this.children={};
        this.isEndOfWord=false;
    }
}

class Trie{
    constructor(){
        this.root=new TrieNode();
    }
    
    insert(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                node.children[char]=new TrieNode()
            }
            node=node.children[char]
        }
        node.isEndOfWord=true;
    }
    
    search(word){
        let node=this.root;
        for(let char of word){
            if(!node.children[char]){
                return false;
            }
            node=node.children[char]
        }
        return node.isEndOfWord;
    }
    
    startsWith(prefix){
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return false
            }
            node=node.children[char]
        }
        return true
    }
    
    autoSuggest(prefix){
        let node=this.root;
        for(let char of prefix){
            if(!node.children[char]){
                return [];
            }
            node=node.children[char]
        }
        
        const suggestions=[]
        this._dfs(node,prefix,suggestions);
        return suggestions
    }
    
    _dfs(node,word,suggestions){
        if(node.isEndOfWord){
            suggestions.push(word)
        }
        for(let char in node.children){
            this._dfs(node.children[char],word+char,suggestions)
        }
    }
    
    longestCommonPrefix(){
        let prefix="";
        let node=this.root;
        while(true){
            const keys=Object.keys(node.children)
            if(keys.length!==1 || node.isEndOfWord){
                break;
            }
            const char=keys[0];
            prefix+=char;
            node=node.children[char]
        }
        return prefix
    }
    
    delete(word) {
        this.deleteHelper(this.root, word, 0);
    }
    
   deleteHelper(node,word,depth){
       if(!node){
          return false
        }
        
       if(depth===word.length){
            node.isEndOfWord=false
           return Object.keys(node.children).length===0;
       }
       
       const char=word[depth];
       if (!node.children[char]) {
          return false; 
        }
       if(this.deleteHelper(node.children[char],word,depth+1)){
           delete node.children[char];
           return Object.keys(node.children).length===0 && !node.isEndOfWord;
       }
       return false;
   }
   
    containsBadWord(sentence) {
        const words = sentence.toLowerCase().split(" ")
        for (let word of words) {
            if (this.search(word)) return true
        }
        return false
    }
}

const trie=new Trie()
// trie.insert("apple");
// trie.insert("app");
// trie.insert("apricot");
// trie.insert("banana");
// trie.insert("bat");
// trie.insert("batch");
console.log(trie.search("apple"))
console.log(trie.search("app"))
console.log(trie.search("bat"))
console.log(trie.startsWith("ap"));
console.log(trie.startsWith("bat")); 
// trie.delete("apple")
// console.log(trie.search("apple"))

console.log(trie.autoSuggest("ap"))
console.log(trie.autoSuggest("ba"));
console.log(trie.autoSuggest("z")); 

["bat","ball","bag"].forEach((word)=>trie.insert(word))
console.log(trie.longestCommonPrefix());

const badWords = ["hate", "abuse", "attack"]
badWords.forEach(word => trie.insert(word))
const sentence = "This is an attack on them"
console.log(trie.containsBadWord(sentence)) 