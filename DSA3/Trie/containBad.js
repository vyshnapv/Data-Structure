const badWords=["bad","ugly","stupid"];
function containsBadWord(sentence){
    const words=sentence.toLowerCase().split(" ");
    for(let word of words){
        if(badWords.includes(word)){
            return  true
        }
    }
    return false
}

console.log(containsBadWord("You are stupid"));