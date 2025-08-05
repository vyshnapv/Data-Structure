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


//reverse a string
function reverse(str){
    let stack=[];
    for(let i=0;i<str.length;i++){
        stack.push(str[i])
    }
    let reversed="";
    for(let i=0;i<str.length;i++){
        reversed+=stack.pop();
    }
    return reversed;
}

let input="hello";
let outPut=reverse(input);
console.log(outPut)