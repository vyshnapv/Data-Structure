//reverse a sentence using stack
//time complexity-o(n)
//space complexity-o(n)
function reverse(s){
    const splits=s.split(" ");
    const stack=[];
    for(let i of splits){
        stack.push(i)
    }
    let finals=""
    while(stack.length){
        const current=stack.pop();
        if(current){
            finals+=" "+current
        }
    }
    return finals
}

let str="hello how are you";
console.log(reverse(str))