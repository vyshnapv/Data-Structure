//given an array of n elements and a target element 'target' find the index of target in the array
//here the time complexity is O(n) and space complexity is 0(1) 
function linearSearch(element,target){
    for(let i=0;i<element.length;i++){
        if(element[i]===target){
            return i;
        }
    }
    return -1;
}
let arr=[2,3,7,34,41,23,12,76,14];
console.log(linearSearch(arr,34))

//linear search for object array
function linearSearch(users,name){
    for(let i=0;i<users.length;i++){
        if(users[i].name===name){
            return users[i];
        }
    }
    return null;
}

let person=[
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
]
console.log(linearSearch(person,"Bob"))